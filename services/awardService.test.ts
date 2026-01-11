
import { awardsService } from './awardService'
import { supabase } from '@/lib/supabase'

// Mock supabase client
jest.mock('@/lib/supabase', () => ({
    supabase: {
        from: jest.fn(() => ({
            select: jest.fn(() => ({
                order: jest.fn()
            }))
        }))
    }
}))

describe('awardsService', () => {
    const mockAwards = [
        { id_award: 1, title: 'Award 2024', year: 2024 },
        { id_award: 2, title: 'Award 2023', year: 2023 }
    ]

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('getAll devuelve los premios ordenados por año', async () => {
        // Setup mock chain
        const orderMock = jest.fn().mockResolvedValue({ data: mockAwards, error: null })
        const selectMock = jest.fn().mockReturnValue({ order: orderMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // Apply mocks to the imported supabase instance
        // @ts-ignore
        supabase.from = fromMock

        const result = await awardsService.getAll()

        expect(supabase.from).toHaveBeenCalledWith('awards')
        expect(fromMock).toHaveBeenCalledTimes(1)
        expect(selectMock).toHaveBeenCalledWith('*')
        expect(orderMock).toHaveBeenCalledWith('year', { ascending: false })
        expect(result).toEqual(mockAwards)
    })

    it("getAll devuelve datos locales cuando supabase falla", async () => {
        // Mock de error
        const mockError = { message: "Error de conexión", details: "", hint: "", code: "" }
            ; (supabase.from as jest.Mock).mockReturnValue({
                select: jest.fn().mockReturnValue({
                    order: jest.fn().mockResolvedValue({ data: null, error: mockError })
                })
            })

        const result = await awardsService.getAll()

        // Verificar que se devuelven datos locales
        expect(result).toBeDefined()
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
        // Verificar propiedad mapeada correctamente
        expect(result[0]).toHaveProperty('year')
    })

    test('getAll devuelve datos locales si data es null', async () => {
        const orderMock = jest.fn().mockResolvedValue({ data: null, error: null })
        const selectMock = jest.fn().mockReturnValue({ order: orderMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await awardsService.getAll()
        expect(result.length).toBeGreaterThan(0)
        expect(result[0]).toHaveProperty('year')
    })
})
