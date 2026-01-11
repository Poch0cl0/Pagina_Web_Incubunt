import { supabase } from '@/lib/supabase'
import type { Award } from '@/types/database.types'
import { awardsData } from '@/components/sections/awards/data/awards'

export const awardsService = {
  async getAll(): Promise<Award[]> {
    const { data, error } = await supabase
      .from('awards')
      .select('*')
      .order('year', { ascending: false })

    if (error || !data || data.length === 0) {
      // Fallback to local data
      return awardsData.map(a => ({
        id_award: a.id,
        title: a.title,
        description: a.description,
        image_url: a.image.src,
        year: new Date().getFullYear(),
        created_at: new Date().toISOString()
      })) as Award[]
    }
    return data || []
  }
}