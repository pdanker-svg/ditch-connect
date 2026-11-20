import { supabase } from './supabase';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Projectlinks mogen het id of de korte naam (slug) bevatten. Voor het
// opslaan is altijd het id nodig.
export async function haalProjectId(idOfSlug: string): Promise<string | null> {
  if (UUID.test(idOfSlug)) return idOfSlug;
  const { data } = await supabase.from('projects').select('id').eq('slug', idOfSlug).maybeSingle();
  return data?.id ?? null;
}
