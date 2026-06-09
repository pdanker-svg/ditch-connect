import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MessageSquare, AlertTriangle, MapPin, ChevronRight, Megaphone } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  naam: string;
  omschrijving: string | null;
  locatie: string | null;
  status: string;
}

interface Update {
  id: string;
  datum: string;
  onderwerp: string;
  inhoud: string;
  type: string;
}

export default function PortaalPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [updates, setUpdates] = useState<Update[]>([]);
  const [laden, setLaden] = useState(true);

  useEffect(() => {
    if (!projectId) { navigate('/404'); return; }
    laadData();
  }, [projectId]);

  async function laadData() {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(projectId!);
    const query = supabase.from('projects').select('id, naam, omschrijving, locatie, status');
    const { data: proj, error } = await (isUuid
      ? query.eq('id', projectId).single()
      : query.eq('slug', projectId).single());

    if (error || !proj) { navigate('/404'); return; }
    setProject(proj);

    const { data: comm } = await supabase
      .from('communicatie')
      .select('id, datum, onderwerp, inhoud, type')
      .eq('project_id', projectId)
      .eq('type', 'nieuwsbrief')
      .order('datum', { ascending: false })
      .limit(5);

    setUpdates(comm ?? []);
    setLaden(false);
  }

  if (laden) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="min-h-screen max-w-lg mx-auto p-4 pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 py-5 mb-2">
        <img src="/logo.svg" alt="Ditch Projecten" className="h-8" />
      </div>

      {/* Project info */}
      <div className="card mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <MapPin size={18} className="text-primary" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">{project.naam}</h1>
            {project.locatie && <p className="text-xs text-gray-400 mt-0.5">📍 {project.locatie}</p>}
            {project.omschrijving && <p className="text-sm text-gray-600 mt-2">{project.omschrijving}</p>}
          </div>
        </div>
      </div>

      {/* Acties */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Link
          to={`/project/${project.id}/melding`}
          className="card flex flex-col items-center gap-2 py-5 hover:shadow-md transition-shadow text-center"
        >
          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
            <AlertTriangle size={18} className="text-red-600" />
          </div>
          <span className="text-sm font-semibold text-gray-900">Melding doen</span>
          <span className="text-xs text-gray-400">Klacht of vraag indienen</span>
        </Link>
        <Link
          to={`/project/${project.id}/bericht`}
          className="card flex flex-col items-center gap-2 py-5 hover:shadow-md transition-shadow text-center"
        >
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <MessageSquare size={18} className="text-primary" />
          </div>
          <span className="text-sm font-semibold text-gray-900">Bericht sturen</span>
          <span className="text-xs text-gray-400">Contact opnemen</span>
        </Link>
      </div>

      {/* Updates */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Megaphone size={15} className="text-gray-400" />
          <h2 className="font-semibold text-gray-900 text-sm">Projectupdates</h2>
        </div>

        {updates.length === 0 ? (
          <div className="card text-center py-8">
            <p className="text-gray-400 text-sm">Nog geen updates geplaatst</p>
          </div>
        ) : (
          <div className="space-y-3">
            {updates.map(u => (
              <div key={u.id} className="card">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{u.onderwerp}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {new Date(u.datum).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 shrink-0 mt-0.5" />
                </div>
                {u.inhoud && (
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{u.inhoud}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
