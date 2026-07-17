'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { formatPhoneNumber, getTelLink } from '@/lib/utils';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Branding */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="font-heading font-bold text-2xl text-brand-red">Blom</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Navigation />
          </nav>

          {/* Right side: Phone + CTA */}
          <div className="flex items-center gap-4">
            <a
              href={getTelLink(siteConfig.business.phone)}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-dark hover:text-brand-red"
              aria-label={`Bel ${siteConfig.business.phoneDisplay}`}
            >
              <span>📞</span>
              <span className="hidden lg:inline">{formatPhoneNumber(siteConfig.business.phone)}</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/offerte"
              className="hidden sm:inline-block px-4 py-2 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
            >
              Offerte
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-brand-dark hover:bg-gray-100"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu onClose={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}
