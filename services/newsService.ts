import { supabase } from '@/lib/supabase'
import type { NewsItem } from '@/types/database.types'

export const newsService = {
  // Obtener todas las noticias
  async getAll(): Promise<NewsItem[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false })

    if (error || !data || data.length === 0) {
      // Fallback: return empty array so UI renders static cards and default image
      return []
    }
    return data || []
  },

  // Obtener noticias por categoría
  async getByCategory(category: string): Promise<NewsItem[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('category', category)
      .order('date', { ascending: false })

    if (error || !data || data.length === 0) {
      return []
    }
    return data
  },

  // Obtener una noticia por slug
  async getBySlug(slug: string): Promise<NewsItem | null> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error || !data) {
      return null
    }
    return data
  }
}
