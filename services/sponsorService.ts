import { supabase } from '@/lib/supabase'

interface SponsorInsert {
  nombres: string
  apellidos: string
  email: string
  celular: string | null
  empresa: string
  tipo_promocion: 'Auspiciador' | 'Sponsor'
  mensaje: string | null
}

export const sendSponsorData = async (data: {
  Nombres: string
  Apellidos: string
  Email: string
  Tipo_promocion: 'Auspiciador' | 'Sponsor'
  Empresa: string
  Celular: string
  Mensaje: string
}) => {
  const sponsorData: SponsorInsert = {
    nombres: data.Nombres,
    apellidos: data.Apellidos,
    email: data.Email,
    tipo_promocion: data.Tipo_promocion,
    empresa: data.Empresa,
    celular: data.Celular || null,
    mensaje: data.Mensaje || null,
  }

  const { data: result, error } = await supabase
    .from('sponsors')
    .insert(sponsorData)
    .select()
    .single()

  if (error) {
    console.error('Error al guardar sponsor:', error)
    throw error
  }

  return { success: true, data: result }
}