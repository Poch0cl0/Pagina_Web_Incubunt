
import { sendVolunteerData } from './volunteerService'
import { supabase } from '@/lib/supabase'

jest.mock('@/lib/supabase', () => ({
    supabase: {
        from: jest.fn()
    }
}))

describe('volunteerService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('sendVolunteerData inserta datos correctamente', async () => {
        const inputData = {
            nombres: 'Jane',
            apellidos: 'Doe',
            email: 'jane@example.com',
            areaInteres: 'TI' as const,
            celular: '987654321'
        }

        const mockResponse = { id_volunteer: 1, ...inputData }
        const singleMock = jest.fn().mockResolvedValue({ data: mockResponse, error: null })
        const selectMock = jest.fn().mockReturnValue({ single: singleMock })
        const insertMock = jest.fn().mockReturnValue({ select: selectMock })
        const fromMock = jest.fn().mockReturnValue({ insert: insertMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await sendVolunteerData(inputData)

        expect(fromMock).toHaveBeenCalledWith('volunteers')
        expect(insertMock).toHaveBeenCalledWith(expect.objectContaining({
            nombres: 'Jane',
            area_interes: 'TI'
        }))
        expect(result).toEqual({ success: true, data: mockResponse })
    })
})
