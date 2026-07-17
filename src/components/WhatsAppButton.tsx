import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getWhatsAppLink } from '@/lib/utils';

export default function WhatsAppButton() {
  return (
    <Link
      href={getWhatsAppLink(siteConfig.business.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 flex items-center justify-center w-16 h-16 hover:scale-110 shadow-lg hover:shadow-xl transition-transform duration-300 z-40"
      aria-label="Chat with us on WhatsApp"
      title="WhatsApp"
    >
      <Image
        src="/images/whatsapp_floating_button_128px.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="rounded-full"
      />
    </Link>
  );
}
