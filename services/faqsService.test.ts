
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
        { id_faq: 1, question: 'Q1', answer: 'A1', order_num: 1 },
        { id_faq: 2, question: 'Q2', answer: 'A2', order_num: 2 }
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

    it("getAll devuelve datos locales si supabase falla", async () => {
        // Mock de error
        const mockError = { message: "Error de conexión", details: "", hint: "", code: "" }
            ; (supabase.from as jest.Mock).mockReturnValue({
                select: jest.fn().mockReturnValue({
                    order: jest.fn().mockResolvedValue({ data: null, error: mockError })
                })
            })

        const result = await faqsService.getAll()

        // Verificar que se retornan datos
        expect(result).toBeDefined()
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
        expect(result[0]).toHaveProperty('question')
    })
})
