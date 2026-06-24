import { LifeBuoy, Mail, ShieldCheck } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
            <LifeBuoy size={24} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Ondersteuning</h1>
            <p className="text-sm text-gray-400">Ditch Connect</p>
          </div>
        </div>

        <div className="space-y-6 text-gray-700 text-sm">
          <p>
            Ditch Connect is de app waarmee bewoners en belanghebbenden op de hoogte blijven van
            infrastructuurprojecten in hun omgeving: planning, omleidingen, projectupdates en de
            mogelijkheid om een melding of bericht te sturen aan het projectteam.
          </p>

          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-2">Veelgestelde vragen</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Hoe voeg ik een project toe?</p>
                <p>
                  Open de app en tik op de "+" knop bij "Mijn projecten". Scan de QR-code die je hebt
                  ontvangen, of typ de projectcode handmatig in.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Ik krijg geen pushmeldingen</p>
                <p>
                  Controleer of meldingen zijn toegestaan via Instellingen → Ditch Connect → Notificaties op
                  je toestel, en of je het juiste project hebt toegevoegd aan "Mijn projecten".
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Ik wil een project niet meer volgen</p>
                <p>
                  Ga naar "Mijn projecten" en tik op het kruisje naast het project om het te verwijderen.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <Mail size={15} className="text-gray-400" />
              Vraag niet gevonden? Mail naar{' '}
              <a href="mailto:pdanker@ditchprojecten.nl" className="text-blue-600 underline">
                pdanker@ditchprojecten.nl
              </a>
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-gray-400" />
              Lees ook onze{' '}
              <a href="/privacy" className="text-blue-600 underline">
                privacyverklaring
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
