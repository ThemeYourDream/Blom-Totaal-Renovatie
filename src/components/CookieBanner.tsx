'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsAccepted, setAnalyticsAccepted] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    } else {
      const consent = JSON.parse(hasConsent);
      setAnalyticsAccepted(consent.analytics);
      loadAnalyticsIfAccepted(consent.analytics);
    }
  }, []);

  const handleAccept = (analytics: boolean) => {
    const consent = { necessary: true, analytics };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setAnalyticsAccepted(analytics);
    loadAnalyticsIfAccepted(analytics);
    setIsVisible(false);
  };

  const loadAnalyticsIfAccepted = (accepted: boolean) => {
    if (accepted && process.env.NEXT_PUBLIC_GA_ID) {
      // Analytics already loaded in layout.tsx with gtag
      window.gtag?.('consent', 'update', {
        analytics_storage: accepted ? 'granted' : 'denied',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark text-white p-4 sm:p-6 max-h-[50vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex-grow">
          <h3 className="font-heading font-bold mb-2">Cookies & toestemming</h3>
          <p className="text-sm text-gray-200 mb-3 sm:mb-0">
            Wij gebruiken noodzakelijke cookies voor de website en optioneel analytische cookies om de website beter te maken. U kunt uw keuze later aanpassen via de footer.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => handleAccept(false)}
            className="px-4 py-2 bg-gray-700 text-white font-medium rounded hover:bg-gray-600 transition-colors text-sm whitespace-nowrap"
          >
            Weigeren
          </button>
          <button
            onClick={() => handleAccept(true)}
            className="px-4 py-2 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
