
import { faqsService } from './faqsService'
import { supabase } from '@/lib/supabase'

jest.mock('@/lib/supabase', () => ({
    supabase: {
        from: jest.fn(() => ({
            select: jest.fn(() => ({
                order: jest.fn()
            }))
        }))
    }
}))

describe('faqsService', () => {
    const mockFAQs = [
        { id: 1, question: 'Q1', answer: 'A1', order_num: 1 },
        { id: 2, question: 'Q2', answer: 'A2', order_num: 2 }
    ]

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('getAll devuelve las FAQs ordenadas', async () => {
        const orderMock = jest.fn().mockResolvedValue({ data: mockFAQs, error: null })
        const selectMock = jest.fn().mockReturnValue({ order: orderMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await faqsService.getAll()

        expect(supabase.from).toHaveBeenCalledWith('faqs')
        expect(orderMock).toHaveBeenCalledWith('order_num', { ascending: true })
        expect(result).toEqual(mockFAQs)
    })

    test('getAll lanza error si supabase falla', async () => {
        const mockError = { message: 'Error', code: '500' }
        const orderMock = jest.fn().mockResolvedValue({ data: null, error: mockError })
        // @ts-ignore
        supabase.from = jest.fn(() => ({ select: jest.fn(() => ({ order: orderMock })) }))

        await expect(faqsService.getAll()).rejects.toEqual(mockError)
    })
})
