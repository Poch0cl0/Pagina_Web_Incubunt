import { supabase } from '@/lib/supabase'
import type { NewsItem } from '@/types/database.types'

export const newsService = {
    // Obtener todas las noticias
    async getAll(): Promise<NewsItem[]> {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .order('date', { ascending: false })
      
      if (error) throw error
      return data || []
    },
  
    // Obtener noticias por categoría
    async getByCategory(category: 'PROYECTOS' | 'COMUNIDAD' | 'NOTICIAS'): Promise<NewsItem[]> {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .eq('category', category)
        .order('date', { ascending: false })
      
      if (error) throw error
      return data || []
    },
  
    // Obtener una noticia por slug
    async getBySlug(slug: string): Promise<NewsItem | null> {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .eq('slug', slug)
        .single()
      
      if (error) throw error
      return data
    }
}
  