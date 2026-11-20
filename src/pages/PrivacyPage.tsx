import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
            <ShieldCheck size={24} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Privacyverklaring</h1>
            <p className="text-sm text-gray-400">Ditch Connect · laatst bijgewerkt: 20 november 2026</p>
          </div>
        </div>

        <div className="prose prose-sm prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">1. Wie zijn wij</h2>
            <p>
              Ditch Connect is een app en webportaal van <strong>Ditch Projecten B.V.</strong>, waarmee
              bewoners en andere belanghebbenden op de hoogte blijven van infrastructuurprojecten in hun
              omgeving. Voor vragen over deze privacyverklaring kun je contact opnemen via{' '}
              <a href="mailto:info@ditchsystems.nl" className="text-blue-600 underline">
                info@ditchsystems.nl
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">2. Welke gegevens verzamelen we</h2>
            <p>
              Ditch Connect is bewust laagdrempelig: je hebt geen account nodig om de app of de webversie te
              gebruiken. We gebruiken geen cookies, advertenties of analyse- en trackingdiensten.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Projecten die je volgt:</strong> de lijst met projecten die je toevoegt ("Mijn
                projecten") en je keuze voor meldingen per project worden alleen lokaal op je eigen toestel
                opgeslagen, niet bij ons.
              </li>
              <li>
                <strong>Pushmeldingen (app):</strong> meldingen staan pas aan als je daar per project voor
                kiest en je toestel toestemming geeft. De app bewaart dan per gevolgd project een
                pushtoken: een technische code waarmee een melding je toestel kan bereiken. We slaan daarbij
                geen naam of e-mailadres op. Het token wordt alleen gebruikt om meldingen over dat project te
                versturen, zoals een nieuwe update, een wijziging in de planning of een nieuwe omleiding.
              </li>
              <li>
                <strong>Camera en foto's (app):</strong> de camera wordt gebruikt om QR-codes te scannen.
                Bij een melding kun je daarnaast zelf een foto maken of uit je fotobibliotheek kiezen en
                meesturen. Die foto wordt besloten opgeslagen en is alleen zichtbaar voor het projectteam
                dat de melding behandelt; hij wordt niet openbaar getoond. Zonder jouw keuze worden geen
                foto's gemaakt of verstuurd.
              </li>
              <li>
                <strong>Melding doen / Bericht sturen:</strong> als je een melding of bericht indient, vragen
                we om je naam en (optioneel) e-mailadres en telefoonnummer, zodat het projectteam contact met
                je kan opnemen. Deze gegevens worden gedeeld met de organisatie die het betreffende
                infrastructuurproject beheert. Geef je een e-mailadres op, dan kan het projectteam je een
                automatische ontvangstbevestiging sturen.
              </li>
              <li>
                <strong>Tevredenheidsbeoordeling:</strong> je score en eventuele opmerking worden anoniem
                opgeslagen, zonder koppeling aan jouw identiteit.
              </li>
              <li>
                <strong>Misbruik voorkomen:</strong> bij het insturen van een melding leggen we je IP-adres en
                (indien opgegeven) e-mailadres vast in een apart logboek. Dat gebruiken we alleen om het
                aantal meldingen per afzender te begrenzen en zo spam en misbruik tegen te gaan.
              </li>
              <li>
                <strong>Bellen:</strong> als je op "Bellen" tikt, open je de standaard telefoon-app van je
                toestel. Wij ontvangen of bewaren geen gegevens over dit telefoongesprek.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">3. Waarvoor gebruiken we deze gegevens</h2>
            <p>
              We gebruiken de gegevens uitsluitend om je te informeren over het project dat je volgt, om
              meldingen en berichten bij het juiste projectteam terecht te laten komen, en om misbruik tegen
              te gaan. We gebruiken je gegevens niet voor advertenties en verkopen ze niet aan derden.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">4. Met wie delen we gegevens</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Supabase</strong> (database- en hostingpartij, EU-datacenter) — voor het opslaan van
                meldingen, foto's bij meldingen, berichten en pushtokens.
              </li>
              <li>
                <strong>Expo</strong> — voor het technisch afleveren van pushmeldingen op je toestel (via
                Apple). Expo ontvangt daarvoor het pushtoken en de tekst van de melding.
              </li>
              <li>
                <strong>Resend</strong> — voor het versturen van e-mail, zoals een automatische
                ontvangstbevestiging als je bij een melding een e-mailadres opgeeft.
              </li>
              <li>
                <strong>Vercel</strong> — hosting van de webversie (connect.ditchsystems.nl).
              </li>
              <li>
                De <strong>organisatie die het project beheert</strong> waarover je een melding of bericht
                instuurt (bijvoorbeeld de aannemer of gemeente).
              </li>
            </ul>
            <p>We delen geen gegevens met derden voor marketingdoeleinden.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">5. Hoe lang bewaren we gegevens</h2>
            <p>
              Meldingen en berichten worden bewaard zolang het betreffende infrastructuurproject loopt en
              voor een redelijke periode daarna, zodat de projectorganisatie eventuele vervolgvragen kan
              afhandelen. Een foto bij een melding wordt bewaard zolang de melding zelf bewaard wordt.
              Een pushtoken wordt verwijderd zodra je meldingen voor dat project uitzet, het project
              verwijdert uit "Mijn projecten", of wanneer het token verloopt (bijvoorbeeld omdat je de app
              hebt verwijderd of meldingen in je toestelinstellingen hebt uitgezet).
            </p>
          </section>

          <section id="verwijderen">
            <h2 className="text-base font-semibold text-gray-900 mb-2">6. Jouw rechten</h2>
            <p>
              Onder de AVG heb je recht op inzage, correctie en verwijdering van je persoonsgegevens. Omdat
              Ditch Connect geen accounts gebruikt, kunnen we gegevens meestal alleen terugvinden op basis van
              het e-mailadres of telefoonnummer dat je hebt opgegeven bij een melding of bericht. Neem
              hiervoor contact op via{' '}
              <a href="mailto:info@ditchsystems.nl" className="text-blue-600 underline">
                info@ditchsystems.nl
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">7. Beveiliging</h2>
            <p>
              We nemen passende technische en organisatorische maatregelen om je gegevens te beschermen,
              waaronder versleutelde verbindingen (HTTPS) en toegangsbeveiliging op onze database.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-900 mb-2">8. Wijzigingen</h2>
            <p>
              We kunnen deze privacyverklaring van tijd tot tijd aanpassen. De datum bovenaan deze pagina
              geeft aan wanneer de verklaring voor het laatst is bijgewerkt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
