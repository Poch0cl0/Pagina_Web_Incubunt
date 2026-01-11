export type Database = {
  public: {
    Tables: {
      news: { // Using 'news' as table name based on service usage
        Row: {
          id_news: number
          title: string
          slug: string
          description: string | null
          content: string | null
          image_url: string | null
          date: string
          category: 'PROYECTOS' | 'COMUNIDAD' | 'NOTICIAS'
          created_at: string
        }
        Insert: {
          id_news?: number
          title: string
          slug: string
          description?: string | null
          content?: string | null
          image_url?: string | null
          date: string
          category: 'PROYECTOS' | 'COMUNIDAD' | 'NOTICIAS'
          created_at?: string
        }
        Update: {
          id_news?: number
          title?: string
          slug?: string
          description?: string | null
          content?: string | null
          image_url?: string | null
          date?: string
          category?: 'PROYECTOS' | 'COMUNIDAD' | 'NOTICIAS'
          created_at?: string
        }
      }
      sponsors: {
        Row: {
          id_sponsor: number
          nombres: string
          apellidos: string
          email: string
          celular: string | null
          empresa: string
          tipo_promocion: 'Auspiciador' | 'Sponsor'
          mensaje: string | null
          created_at: string
        }
        Insert: {
          id_sponsor?: number
          nombres: string
          apellidos: string
          email: string
          celular?: string | null
          empresa: string
          tipo_promocion: 'Auspiciador' | 'Sponsor'
          mensaje?: string | null
          created_at?: string
        }
        Update: {
          id_sponsor?: number
          nombres?: string
          apellidos?: string
          email?: string
          celular?: string | null
          empresa?: string
          tipo_promocion?: 'Auspiciador' | 'Sponsor'
          mensaje?: string | null
          created_at?: string
        }
      }
      volunteers: {
        Row: {
          id_volunteer: number
          nombres: string
          apellidos: string
          email: string
          celular: string | null
          universidad: string | null
          ciclo: string | null
          carrera: string | null
          area_interes: 'PMO' | 'MKT' | 'LOGISTICA' | 'SIGE' | 'GTH' | 'TI'
          created_at: string
        }
        Insert: {
          id_volunteer?: number
          nombres: string
          apellidos: string
          email: string
          celular?: string | null
          universidad?: string | null
          ciclo?: string | null
          carrera?: string | null
          area_interes: 'PMO' | 'MKT' | 'LOGISTICA' | 'SIGE' | 'GTH' | 'TI'
          created_at?: string
        }
        Update: {
          id_volunteer?: number
          nombres?: string
          apellidos?: string
          email?: string
          celular?: string | null
          universidad?: string | null
          ciclo?: string | null
          carrera?: string | null
          area_interes?: 'PMO' | 'MKT' | 'LOGISTICA' | 'SIGE' | 'GTH' | 'TI'
          created_at?: string
        }
      }
      awards: {
        Row: {
          id_award: number
          title: string
          description: string | null
          image_url: string | null
          year: number | null
          created_at: string
        }
        Insert: {
          id_award?: number
          title: string
          description?: string | null
          image_url?: string | null
          year?: number | null
          created_at?: string
        }
        Update: {
          id_award?: number
          title?: string
          description?: string | null
          image_url?: string | null
          year?: number | null
          created_at?: string
        }
      }
      faqs: {
        Row: {
          id_faq: number
          question: string
          answer: string
          order_num: number
          created_at: string
        }
        Insert: {
          id_faq?: number
          question: string
          answer: string
          order_num: number
          created_at?: string
        }
        Update: {
          id_faq?: number
          question?: string
          answer?: string
          order_num?: number
          created_at?: string
        }
      }
    }
  }
}

// Tipos de conveniencia
export type NewsItem = Database['public']['Tables']['news']['Row']
export type NewsItemInsert = Database['public']['Tables']['news']['Insert']
export type Sponsor = Database['public']['Tables']['sponsors']['Row']
export type SponsorInsert = Database['public']['Tables']['sponsors']['Insert']
export type Volunteer = Database['public']['Tables']['volunteers']['Row']
export type VolunteerInsert = Database['public']['Tables']['volunteers']['Insert']
export type Award = Database['public']['Tables']['awards']['Row']
export type AwardInsert = Database['public']['Tables']['awards']['Insert']
export type FAQ = Database['public']['Tables']['faqs']['Row']
export type FAQInsert = Database['public']['Tables']['faqs']['Insert']