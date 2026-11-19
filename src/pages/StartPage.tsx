import { Link } from 'react-router-dom';
import { QrCode, Link2, Bell, AlertTriangle, Smartphone } from 'lucide-react';

export const APP_STORE_URL = 'https://apps.apple.com/nl/app/ditch-connect/id6783915891';

// Startpagina voor wie ditch-connect zonder projectlink opent.
export default function StartPage() {
  return (
    <div className="min-h-screen max-w-lg mx-auto p-4 pb-16">
      <div className="flex items-center gap-3 py-5 mb-2">
        <img src="/logo.svg" alt="Ditch Projecten" className="h-8" />
      </div>

      <div className="card mb-4">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Ditch Connect</h1>
        <p className="text-sm text-gray-600">
          Met Ditch Connect blijft u op de hoogte van werkzaamheden bij u in de buurt. U ziet het laatste nieuws,
          de planning en omleidingen, en u kunt een vraag, klacht of melding doorgeven aan het projectteam.
        </p>
      </div>

      <div className="card mb-4">
        <h2 className="font-semibold text-gray-900 text-sm mb-3">Hoe komt u bij uw project?</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <QrCode size={17} className="text-primary" />
            </div>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">Scan de QR-code</strong> op de bewonersbrief, het bouwbord of de projectkaart.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <Link2 size={17} className="text-primary" />
            </div>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">Of open de projectlink</strong> die u van het projectteam heeft gekregen, bijvoorbeeld per brief of e-mail.
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Heeft u geen link of QR-code? Neem dan contact op met de opdrachtgever of aannemer van het project.
        </p>
      </div>

      <div className="card mb-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <Smartphone size={17} className="text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 text-sm">Liever de app?</h2>
            <p className="text-sm text-gray-600 mt-1">
              In de app volgt u meerdere projecten en krijgt u een pushbericht bij nieuws.
            </p>
            <div className="flex gap-4 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Bell size={13} /> Pushberichten</span>
              <span className="flex items-center gap-1"><AlertTriangle size={13} /> Melding met foto</span>
            </div>
          </div>
        </div>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-black text-white rounded-xl py-3 text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.65-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.22z" />
          </svg>
          Download in de App Store
        </a>
        <p className="text-xs text-gray-400 mt-2 text-center">De Android-versie volgt binnenkort.</p>
      </div>

      <p className="text-center text-xs text-gray-400 space-x-3">
        <Link to="/privacy" className="hover:underline">Privacyverklaring</Link>
        <Link to="/support" className="hover:underline">Support</Link>
      </p>
    </div>
  );
}
