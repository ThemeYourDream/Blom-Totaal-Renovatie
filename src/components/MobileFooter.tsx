'use client';

import { siteConfig } from '@/config/site';
import { getTelLink, getWhatsAppLink } from '@/lib/utils';

export default function MobileFooter() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-3 py-2 flex gap-2">
        <a
          href={getTelLink(siteConfig.business.phone)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-brand-red text-white font-medium rounded text-xs"
        >
          📞 Bel
        </a>
        <a
          href={getWhatsAppLink(siteConfig.business.whatsapp)}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-500 text-white font-medium rounded text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Chat
        </a>
      </div>
    </div>
  );
}
