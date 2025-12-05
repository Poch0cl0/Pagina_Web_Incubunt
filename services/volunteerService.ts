import { supabase } from '@/lib/supabase'

interface VolunteerInsert {
  nombres: string
  apellidos: string
  email: string
  celular: string | null
  universidad: string | null
  ciclo: string | null
  carrera: string | null
  area_interes: 'PMO' | 'MKT' | 'LOGISTICA' | 'SIGE' | 'GTH' | 'TI'
}

export const sendVolunteerData = async (data: {
  nombres: string
  apellidos: string
  email: string
  celular?: string
  universidad?: string
  ciclo?: string
  carrera?: string
  areaInteres: 'PMO' | 'MKT' | 'LOGISTICA' | 'SIGE' | 'GTH' | 'TI'
}) => {
  const volunteerData: VolunteerInsert = {
    nombres: data.nombres,
    apellidos: data.apellidos,
    email: data.email,
    celular: data.celular || null,
    universidad: data.universidad || null,
    ciclo: data.ciclo || null,
    carrera: data.carrera || null,
    area_interes: data.areaInteres,
  }

  const { data: result, error } = await supabase
    .from('volunteers')
    .insert(volunteerData)
    .select()
    .single()

  if (error) {
    console.error('Error al guardar voluntario:', error)
    throw error
  }

  return { success: true, data: result }
}