import { supabase } from '@/lib/supabase'
import type { FAQ } from '@/types/database.types'

export const faqsService = {
  async getAll(): Promise<FAQ[]> {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('order_num', { ascending: true })
    
    if (error) throw error
    return data || []
  }
}