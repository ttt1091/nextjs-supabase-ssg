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

export async function sendPosts(): Promise<any[]> {
  const { data, error } = await supabase
    .from('posts')
    .insert([
      // { date: "2021-01-01", week: "金", holiday: "元日", holidayflag: true, old: "11/18" },
      // { date: "2021-01-02", week: "土", holiday: null, holidayflag: false, old: "11/19" }
    ])

  if (error && status !== 406) {
    throw error
  }

  return data;
}