import Link from 'next/link';
import { useState } from 'react';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Over ons', href: '/overons' },
  {
    label: 'Diensten',
    href: '/diensten',
    submenu: [
      { label: 'Totaalrenovatie', href: '/diensten/totaalrenovatie' },
      { label: 'Badkamer', href: '/diensten/badkamer' },
      { label: 'Toilet', href: '/diensten/toilet' },
      { label: 'Keuken', href: '/diensten/keuken' },
      { label: 'Schilderwerk', href: '/diensten/schilderwerk' },
      { label: 'Stucwerk', href: '/diensten/stukadoorswerk' },
      { label: 'Tegelwerk', href: '/diensten/tegelwerk' },
      { label: 'Timmerwerk', href: '/diensten/timmerwerk' },
      { label: 'Vloeren', href: '/diensten/vloeren' },
      { label: 'Aanbouw', href: '/diensten/aanbouw' },
      { label: 'Isolatie', href: '/diensten/isolatie' },
      { label: 'Dak', href: '/diensten/dak' },
      { label: 'Gevel', href: '/diensten/gevel' },
      { label: 'HR++ glas', href: '/diensten/glas' },
    ],
  },
  { label: 'Projecten', href: '/projecten' },
  { label: 'Werkgebied', href: '/werkgebied' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <>
      {navigationItems.map((item) => (
        <div key={item.href} className="relative group">
          <Link
            href={item.href}
            className="text-sm font-medium text-brand-dark hover:text-brand-red transition-colors py-2"
          >
            {item.label}
          </Link>

          {item.submenu && (
            <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.href}
                  href={subitem.href}
                  className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-light hover:text-brand-red first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {subitem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
