import { supabase } from '../../utils/supabaseClient'

export async function getCalendar(): Promise<any[]> {
  const { data, error, status } = await supabase
    .from<any>('posts')
    .select('date, week, holiday')
    .gte('date', '2021-01-01') // 以上 & 等しい
    .lte('date', '2021-12-31') // 未満 & 等しい

  if (error && status !== 406) {
    throw error
  }

  return data;
}