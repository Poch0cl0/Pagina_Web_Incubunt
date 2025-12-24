import { supabase } from '@/lib/supabase'
import type { FAQ } from '@/types/database.types'
import { MOCK_FAQS } from '@/utils/mockData'

export const faqsService = {
  async getAll(): Promise<FAQ[]> {
    try {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .order('order_num', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error("Error fetching FAQs:", error)
      return MOCK_FAQS
    }
  }
}