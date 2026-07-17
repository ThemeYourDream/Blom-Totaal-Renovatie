'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';
import { put } from '@vercel/blob';
import { z } from 'zod';
import { siteConfig } from '@/config/site';

// Validation schema
const OfferteFormSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Geldig e-mailadres is verplicht'),
  phone: z.string().min(10, 'Telefoonnummer is verplicht'),
  postcode: z.string().optional(),
  city: z.string().optional(),
  type: z.enum(['particular', 'business', 'vve']),
  serviceType: z.string(),
  period: z.string(),
  description: z.string().max(2000, 'Omschrijving mag maximaal 2000 karakters zijn'),
});

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((t) => now - t < 60000); // 1 minute

  if (recentTimestamps.length >= 3) {
    return false;
  }

  rateLimitMap.set(ip, [...recentTimestamps, now]);
  return true;
}

// Get client IP
function getClientIP(): string {
  const headersList = headers();
  return (
    headersList.get('x-forwarded-for')?.split(',')[0] ||
    headersList.get('x-real-ip') ||
    'unknown'
  );
}

// Sanitize filename
function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-z0-9._-]/gi, '_')
    .replace(/_+/g, '_')
    .toLowerCase();
}

export async function submitOfferteForm(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Rate limiting
    const ip = getClientIP();
    if (!checkRateLimit(ip)) {
      return { success: false, error: 'Te veel aanvragen. Probeer later opnieuw.' };
    }

    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const postcode = formData.get('postcode') as string;
    const city = formData.get('city') as string;
    const type = formData.get('type') as string;
    const serviceType = formData.get('serviceType') as string;
    const period = formData.get('period') as string;
    const description = formData.get('description') as string;

    // Validate data
    const validation = OfferteFormSchema.safeParse({
      name,
      email,
      phone,
      postcode,
      city,
      type,
      serviceType,
      period,
      description,
    });

    if (!validation.success) {
      return { success: false, error: 'Validatiefout: controleer uw gegevens' };
    }

    // Process files
    const files = formData.getAll('files') as File[];
    const fileUrls: string[] = [];

    if (files.length > 0) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) {
          return { success: false, error: `Bestand ${file.name} is te groot` };
        }

        const buffer = await file.arrayBuffer();
        const sanitizedName = sanitizeFilename(file.name);
        const timestamp = Date.now();
        const blobName = `offertes/${timestamp}/${sanitizedName}`;

        try {
          const blob = await put(blobName, buffer, {
            access: 'private',
          });
          fileUrls.push(blob.url);
        } catch (err) {
          console.error(`Failed to upload ${file.name}:`, err);
          return { success: false, error: 'Bestandsupload mislukt' };
        }
      }
    }

    // Send emails
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'offerte@blomtotaalrenovatie.nl';

    // Email to business
    const businessEmailHtml = `
      <h2>Nieuwe offerteaanvraag</h2>
      <h3>Contactgegevens</h3>
      <p><strong>Naam:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefoonnummer:</strong> ${escapeHtml(phone)}</p>
      ${postcode ? `<p><strong>Postcode:</strong> ${escapeHtml(postcode)}</p>` : ''}
      ${city ? `<p><strong>Woonplaats:</strong> ${escapeHtml(city)}</p>` : ''}

      <h3>Projectinformatie</h3>
      <p><strong>Type aanvrager:</strong> ${type === 'particular' ? 'Particulier' : type === 'business' ? 'Bedrijf' : 'VvE'}</p>
      <p><strong>Type werkzaamheden:</strong> ${escapeHtml(serviceType)}</p>
      <p><strong>Gewenste periode:</strong> ${escapeHtml(period)}</p>

      <h3>Omschrijving</h3>
      <p>${escapeHtml(description).replace(/\n/g, '<br>')}</p>

      ${fileUrls.length > 0 ? `<p><strong>Bestanden:</strong> ${fileUrls.length} bestand(en) geüpload</p>` : ''}
    `;

    try {
      await resend.emails.send({
        from: fromEmail,
        to: siteConfig.business.email,
        subject: `Nieuwe offerteaanvraag van ${name}`,
        html: businessEmailHtml,
      });
    } catch (err) {
      console.error('Failed to send business email:', err);
      return { success: false, error: 'E-mail verzending mislukt' };
    }

    // Confirmation email to customer
    const customerEmailHtml = `
      <h2>Dank voor uw aanvraag!</h2>
      <p>Beste ${escapeHtml(name)},</p>
      <p>Wij hebben uw aanvraag voor offerte ontvangen. Melvin zal binnenkort contact met u opnemen om uw werkzaamheden en de mogelijkheden te bespreken.</p>
      <p>Tot ziens!</p>
      <p><strong>${siteConfig.name}</strong></p>
    `;

    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Dank voor uw offerteaanvraag',
        html: customerEmailHtml,
      });
    } catch (err) {
      console.error('Failed to send customer email:', err);
      // Don't fail the whole submission if confirmation email fails
    }

    return { success: true };
  } catch (err) {
    console.error('Offerte submission error:', err);
    return { success: false, error: 'Er is een fout opgetreden' };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
