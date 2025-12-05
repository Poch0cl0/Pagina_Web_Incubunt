import { supabase } from '@/lib/supabase'
import type { Award } from '@/types/database.types'

export const awardsService = {
  async getAll(): Promise<Award[]> {
    const { data, error } = await supabase
      .from('awards')
      .select('*')
      .order('year', { ascending: false })
    
    if (error) throw error
    return data || []
  }
}