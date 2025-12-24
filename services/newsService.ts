import { supabase } from '@/lib/supabase'
import type { NewsItem } from '@/types/database.types'
import { MOCK_NEWS } from '@/utils/mockData'

export const newsService = {
  // Obtener todas las noticias
  async getAll(): Promise<NewsItem[]> {
    try {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .order('date', { ascending: false })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error("Error fetching all news:", error)
      return MOCK_NEWS
    }
  },

  // Obtener noticias por categoría
  async getByCategory(category: 'PROYECTOS' | 'COMUNIDAD' | 'NOTICIAS'): Promise<NewsItem[]> {
    try {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .eq('category', category)
        .order('date', { ascending: false })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error(`Error fetching news by category ${category}:`, error)
      return MOCK_NEWS.filter(item => item.category === category)
    }
  },

  // Obtener una noticia por slug
  async getBySlug(slug: string): Promise<NewsItem | null> {
    try {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error(`Error fetching news by slug ${slug}:`, error)
      return MOCK_NEWS.find(item => item.slug === slug) || null
    }
  }
}
