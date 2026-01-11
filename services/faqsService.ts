import { supabase } from '@/lib/supabase'
import type { FAQ } from '@/types/database.types'
import { questionsData } from '@/components/sections/faqs/data/questions'

export const faqsService = {
  async getAll(): Promise<FAQ[]> {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('order_num', { ascending: true })

    if (error || !data || data.length === 0) {
      return questionsData.map((q, index) => ({
        id_faq: index + 1,
        question: q.question,
        answer: q.answer,
        order_num: index + 1,
        created_at: new Date().toISOString()
      })) as FAQ[]
    }
    return data || []
  }
}