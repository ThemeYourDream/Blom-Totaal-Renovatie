import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getWhatsAppLink } from '@/lib/utils';

export default function WhatsAppButton() {
  return (
    <Link
      href={getWhatsAppLink(siteConfig.business.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      aria-label="Chat with us on WhatsApp"
      title="WhatsApp"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.562 0-3.051.484-4.315 1.396l-.311.191-3.22-.844.86 3.126.204.325c-.973 1.371-1.481 2.96-1.481 4.71 0 4.237 3.456 7.693 7.693 7.693 2.054 0 3.976-.789 5.407-2.204 1.432-1.414 2.223-3.297 2.223-5.489 0-4.236-3.456-7.693-7.693-7.693" />
      </svg>
    </Link>
  );
}
