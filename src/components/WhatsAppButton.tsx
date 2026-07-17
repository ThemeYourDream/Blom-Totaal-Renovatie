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
      className="fixed bottom-8 right-8 hover:scale-110 shadow-lg hover:shadow-xl transition-transform duration-300 z-40 rounded-full overflow-hidden"
      aria-label="Chat with us on WhatsApp"
      title="WhatsApp"
    >
      <Image
        src="/images/whatsapp_floating_button_128px.png"
        alt="WhatsApp"
        width={80}
        height={80}
        className="w-20 h-20"
      />
    </Link>
  );
}
