import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertTriangle, ChevronLeft, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CATEGORIEEN = [
  { value: 'klacht', label: 'Klacht' },
  { value: 'vraag', label: 'Vraag' },
  { value: 'opmerking', label: 'Opmerking' },
  { value: 'compliment', label: 'Compliment' },
];

export default function MeldingPage() {
  const { projectId } = useParams<{ projectId: string }>();

  const [form, setForm] = useState({
    naam: '', email: '', telefoon: '',
    categorie: 'klacht', onderwerp: '', omschrijving: '',
  });
  const [laden, setLaden] = useState(false);
  const [fout, setFout] = useState('');
  const [verzonden, setVerzonden] = useState(false);

  function set(key: string, value: string) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function handleVerzenden(e: React.FormEvent) {
    e.preventDefault();
    if (!form.naam.trim() || !form.onderwerp.trim() || !form.omschrijving.trim()) {
      setFout('Vul alle verplichte velden in.');
      return;
    }
    setLaden(true);
    setFout('');
    try {
      const { error } = await supabase.from('meldingen').insert({
        project_id: projectId,
        kanaal: 'formulier',
        categorie: form.categorie,
        onderwerp: form.onderwerp,
        omschrijving: form.omschrijving,
        status: 'nieuw',
        prioriteit: 'middel',
        datum: new Date().toISOString().slice(0, 10),
      });
      if (error) throw error;
      setVerzonden(true);
    } catch {
      setFout('Verzenden mislukt. Probeer het opnieuw.');
    } finally {
      setLaden(false);
    }
  }

  if (verzonden) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={28} className="text-green-600" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Melding ontvangen</h1>
          <p className="text-gray-500 text-sm mb-6">
            Bedankt voor je melding. Het projectteam neemt zo snel mogelijk contact met je op.
          </p>
          <Link to={`/project/${projectId}`} className="btn-primary">
            Terug naar het project
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-lg mx-auto p-4 pb-12">
      <div className="flex items-center gap-3 py-5">
        <img src="/logo.svg" alt="Ditch Projecten" className="h-8" />
      </div>

      <Link to={`/project/${projectId}`} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-5">
        <ChevronLeft size={16} /> Terug
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
          <AlertTriangle size={18} className="text-red-600" />
        </div>
        <div>
          <h1 className="font-bold text-gray-900">Melding doen</h1>
          <p className="text-xs text-gray-400">Klacht, vraag of opmerking indienen</p>
        </div>
      </div>

      <form onSubmit={handleVerzenden} className="space-y-4">
        {fout && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{fout}</div>
        )}

        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-900 text-sm">Jouw gegevens</h2>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Naam *</label>
            <input className="input" value={form.naam} onChange={e => set('naam', e.target.value)} placeholder="Voor- en achternaam" required />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">E-mailadres</label>
            <input className="input" type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="Voor terugkoppeling (optioneel)" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Telefoon</label>
            <input className="input" value={form.telefoon} onChange={e => set('telefoon', e.target.value)} placeholder="Optioneel" />
          </div>
        </div>

        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-900 text-sm">Melding</h2>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Type</label>
            <select className="input" value={form.categorie} onChange={e => set('categorie', e.target.value)}>
              {CATEGORIEEN.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Onderwerp *</label>
            <input className="input" value={form.onderwerp} onChange={e => set('onderwerp', e.target.value)} placeholder="Kort omschrijven" required />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Omschrijving *</label>
            <textarea className="input resize-none" rows={4} value={form.omschrijving} onChange={e => set('omschrijving', e.target.value)} placeholder="Beschrijf je melding zo duidelijk mogelijk..." required />
          </div>
        </div>

        <button type="submit" disabled={laden} className="btn-primary w-full">
          {laden ? 'Verzenden...' : 'Melding indienen'}
        </button>

        <p className="text-xs text-center text-gray-400">
          Je gegevens worden vertrouwelijk behandeld conform onze{' '}
          <a href="https://ditchsystems.nl/privacy" target="_blank" rel="noopener noreferrer" className="underline">privacyverklaring</a>.
        </p>
      </form>
    </div>
  );
}
