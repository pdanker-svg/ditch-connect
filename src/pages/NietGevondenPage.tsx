import { MapPin } from 'lucide-react';

export default function NietGevondenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <MapPin size={28} className="text-gray-400" />
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">Pagina niet gevonden</h1>
        <p className="text-gray-500 text-sm">
          Deze link is niet geldig of het project bestaat niet meer.
        </p>
      </div>
    </div>
  );
}
