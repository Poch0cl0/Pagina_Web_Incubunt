
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
        { id: 1, title: 'Award 2024', year: 2024 },
        { id: 2, title: 'Award 2023', year: 2023 }
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

    test('getAll lanza error cuando supabase falla', async () => {
        const mockError = { message: 'Database error', code: '500' }

        const orderMock = jest.fn().mockResolvedValue({ data: null, error: mockError })
        const selectMock = jest.fn().mockReturnValue({ order: orderMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // @ts-ignore
        supabase.from = fromMock

        await expect(awardsService.getAll()).rejects.toEqual(mockError)
    })

    test('getAll devuelve array vacío si data es null', async () => {
        const orderMock = jest.fn().mockResolvedValue({ data: null, error: null })
        const selectMock = jest.fn().mockReturnValue({ order: orderMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await awardsService.getAll()
        expect(result).toEqual([])
    })
})
