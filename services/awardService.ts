import { supabase } from '@/lib/supabase'
import type { Award } from '@/types/database.types'
import { MOCK_AWARDS } from '@/utils/mockData'

export const awardsService = {
  async getAll(): Promise<Award[]> {
    try {
      const { data, error } = await supabase
        .from('awards')
        .select('*')
        .order('year', { ascending: false })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error("Error fetching awards:", error)
      return MOCK_AWARDS
    }
  }
}