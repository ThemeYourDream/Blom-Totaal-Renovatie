'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { getTelLink, getMailLink, getWhatsAppLink } from '@/lib/utils';

interface MobileMenuProps {
  onClose: () => void;
}

const serviceCategories = [
  {
    title: 'Totaalrenovatie',
    items: [
      { label: 'Totaalrenovatie', href: '/diensten/totaalrenovatie' },
      { label: 'Aanbouw', href: '/diensten/aanbouw' },
    ],
  },
  {
    title: 'Badkamer, toilet & keuken',
    items: [
      { label: 'Badkamer', href: '/diensten/badkamer' },
      { label: 'Toilet', href: '/diensten/toilet' },
      { label: 'Keuken', href: '/diensten/keuken' },
    ],
  },
  {
    title: 'Afwerking',
    items: [
      { label: 'Schilderwerk', href: '/diensten/schilderwerk' },
      { label: 'Stucwerk', href: '/diensten/stukadoorswerk' },
      { label: 'Tegelwerk', href: '/diensten/tegelwerk' },
      { label: 'Timmerwerk', href: '/diensten/timmerwerk' },
      { label: 'Vloeren', href: '/diensten/vloeren' },
    ],
  },
  {
    title: 'Onderhoud & specialismes',
    items: [
      { label: 'Isolatie', href: '/diensten/isolatie' },
      { label: 'Dak', href: '/diensten/dak' },
      { label: 'Gevel', href: '/diensten/gevel' },
      { label: 'HR++ glas', href: '/diensten/glas' },
    ],
  },
];

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-80px)] overflow-y-auto">
      <div className="px-4 py-6 space-y-4">
        {/* Quick Links */}
        <Link
          href="/"
          className="block text-lg font-medium text-brand-dark hover:text-brand-red"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          href="/overons"
          className="block text-lg font-medium text-brand-dark hover:text-brand-red"
          onClick={onClose}
        >
          Over ons
        </Link>

        {/* Services with accordion */}
        <div className="py-4">
          <h3 className="font-heading font-bold text-lg mb-3">Diensten</h3>
          <div className="space-y-2">
            {serviceCategories.map((category) => (
              <div key={category.title}>
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.title ? null : category.title
                    )
                  }
                  className="w-full text-left py-2 text-sm font-medium text-brand-dark hover:text-brand-red flex items-center justify-between"
                >
                  {category.title}
                  <span
                    className={`transition-transform ${
                      expandedCategory === category.title ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedCategory === category.title && (
                  <div className="pl-4 space-y-2 mt-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-brand-dark hover:text-brand-red py-1"
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/projecten"
          className="block text-lg font-medium text-brand-dark hover:text-brand-red"
          onClick={onClose}
        >
          Projecten
        </Link>
        <Link
          href="/werkgebied"
          className="block text-lg font-medium text-brand-dark hover:text-brand-red"
          onClick={onClose}
        >
          Werkgebied
        </Link>

        {/* CTA Button */}
        <Link
          href="/offerte"
          className="block w-full px-4 py-3 bg-brand-red text-white font-medium rounded text-center hover:bg-red-700 transition-colors"
          onClick={onClose}
        >
          Vraag offerte aan
        </Link>

        {/* Contact Options */}
        <div className="border-t pt-4 mt-4 space-y-3">
          <a
            href={getTelLink(siteConfig.business.phone)}
            className="flex items-center gap-3 text-brand-dark hover:text-brand-red font-medium"
          >
            <span>📞</span>
            <span>Bel ons</span>
          </a>
          <a
            href={getWhatsAppLink(siteConfig.business.whatsapp)}
            className="flex items-center gap-3 text-brand-dark hover:text-brand-red font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬</span>
            <span>WhatsApp</span>
          </a>
          <a
            href={getMailLink(siteConfig.business.email)}
            className="flex items-center gap-3 text-brand-dark hover:text-brand-red font-medium"
          >
            <span>📧</span>
            <span>E-mail</span>
          </a>
        </div>
      </div>
    </div>
  );
}
