import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getTelLink, getMailLink } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white mt-0 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Complete renovatie met één duidelijk aanspreekpunt.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Vestiging:</strong> {siteConfig.business.city}
              </p>
              <p>
                <strong>KvK:</strong> {siteConfig.business.kvk}
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diensten/totaalrenovatie" className="hover:text-brand-red transition-colors">
                  Totaalrenovatie
                </Link>
              </li>
              <li>
                <Link href="/diensten/badkamer" className="hover:text-brand-red transition-colors">
                  Badkamer
                </Link>
              </li>
              <li>
                <Link href="/diensten/schilderwerk" className="hover:text-brand-red transition-colors">
                  Schilderwerk
                </Link>
              </li>
              <li>
                <Link href="/diensten/stukadoorswerk" className="hover:text-brand-red transition-colors">
                  Stucwerk
                </Link>
              </li>
              <li>
                <Link href="/diensten/tegelwerk" className="hover:text-brand-red transition-colors">
                  Tegelwerk
                </Link>
              </li>
              <li>
                <Link href="/diensten/glas" className="hover:text-brand-red transition-colors">
                  HR++ glas
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-bold mb-4">Pagina's</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/overons" className="hover:text-brand-red transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/projecten" className="hover:text-brand-red transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/werkgebied" className="hover:text-brand-red transition-colors">
                  Werkgebied
                </Link>
              </li>
              <li>
                <Link href="/offerte" className="hover:text-brand-red transition-colors">
                  Offerte aanvraag
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300">Telefoon</p>
                <a href={getTelLink(siteConfig.business.phone)} className="hover:text-brand-red transition-colors">
                  {siteConfig.business.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-gray-300">E-mail</p>
                <a href={getMailLink(siteConfig.business.email)} className="hover:text-brand-red transition-colors">
                  {siteConfig.business.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Copyright */}
            <p className="text-sm text-gray-300">&copy; {currentYear} {siteConfig.name}. Alle rechten voorbehouden.</p>

            {/* Center: Social Media */}
            <div className="flex gap-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Image src="/images/instagram-logo-footer.png" alt="Instagram" width={28} height={28} style={{ borderRadius: '4px' }} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Image src="/images/Facebook logo footer.png" alt="Facebook" width={28} height={28} style={{ borderRadius: '4px' }} />
              </a>
            </div>

            {/* Right: Legal */}
            <div className="flex gap-4 text-sm text-gray-300">
              <Link href="/privacy" className="hover:text-brand-red transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:text-brand-red transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
