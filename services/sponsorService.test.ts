
import { sendSponsorData } from './sponsorService'
import { supabase } from '@/lib/supabase'

jest.mock('@/lib/supabase', () => ({
    supabase: {
        from: jest.fn()
    }
}))

describe('sponsorService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('sendSponsorData inserta datos correctamente', async () => {
        const inputData = {
            Nombres: 'John',
            Apellidos: 'Doe',
            Email: 'john@example.com',
            Tipo_promocion: 'Sponsor' as const,
            Empresa: 'Test Corp',
            Celular: '123456789',
            Mensaje: 'Hello'
        }

        const mockResponse = { id: 1, ...inputData }
        const singleMock = jest.fn().mockResolvedValue({ data: mockResponse, error: null })
        const selectMock = jest.fn().mockReturnValue({ single: singleMock })
        const insertMock = jest.fn().mockReturnValue({ select: selectMock })
        const fromMock = jest.fn().mockReturnValue({ insert: insertMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await sendSponsorData(inputData)

        expect(fromMock).toHaveBeenCalledWith('sponsors')
        expect(insertMock).toHaveBeenCalledWith({
            nombres: 'John',
            apellidos: 'Doe',
            email: 'john@example.com',
            tipo_promocion: 'Sponsor',
            empresa: 'Test Corp',
            celular: '123456789',
            mensaje: 'Hello'
        })
        expect(result).toEqual({ success: true, data: mockResponse })
    })

    test('sendSponsorData lanza error si la inserción falla', async () => {
        const mockError = { message: 'Insert failed', code: '500' }
        const singleMock = jest.fn().mockResolvedValue({ data: null, error: mockError })
        // @ts-ignore
        supabase.from = jest.fn(() => ({
            insert: jest.fn(() => ({
                select: jest.fn(() => ({
                    single: singleMock
                }))
            }))
        }))

        // Silencia el console.error esperado
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { })

        await expect(sendSponsorData({
            Nombres: 'John',
            Apellidos: 'Doe',
            Email: 'john@example.com',
            Tipo_promocion: 'Sponsor',
            Empresa: 'Corp',
            Celular: '',
            Mensaje: ''
        })).rejects.toEqual(mockError)

        consoleSpy.mockRestore()
    })
})
