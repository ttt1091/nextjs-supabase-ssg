import { supabase } from '../utils/supabaseClient'

export async function getProducts(): Promise<any[]> {
  const { data, error, status } = await supabase
    .from<any>('posts')
    .select(`
      *
    `)

  if (error && status !== 406) {
    throw error
  }

  return data;
}