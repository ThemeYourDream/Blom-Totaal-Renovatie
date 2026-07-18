'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getWhatsAppLink } from '@/lib/utils';

export default function WhatsAppButton() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !hasScrolled) {
        setHasScrolled(true);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <>
      <style>{`
        @keyframes bounce-up {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-80px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-bounce-up {
          animation: bounce-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
      <Link
        href={getWhatsAppLink(siteConfig.business.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:fixed bottom-8 right-8 hover:scale-110 shadow-lg hover:shadow-xl transition-transform duration-300 z-40 rounded-full overflow-hidden ${
          isAnimating ? 'animate-bounce-up' : ''
        }`}
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp"
      >
        <Image
          src="/images/whatsapp_floating_button_128px.png"
          alt="WhatsApp"
          width={80}
          height={80}
          className="w-14 h-14 md:w-20 md:h-20"
        />
      </Link>
    </>
  );
}
