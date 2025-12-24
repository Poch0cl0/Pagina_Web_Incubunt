
import { newsService } from './newsService'
import { supabase } from '@/lib/supabase'

jest.mock('@/lib/supabase', () => ({
    supabase: {
        from: jest.fn()
    }
}))

describe('newsService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('getAll devuelve noticias ordenadas por fecha', async () => {
        const mockData = [{ id: 1, title: 'News 1' }]
        const orderMock = jest.fn().mockResolvedValue({ data: mockData, error: null })
        const selectMock = jest.fn().mockReturnValue({ order: orderMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await newsService.getAll()

        expect(fromMock).toHaveBeenCalledWith('news_items')
        expect(orderMock).toHaveBeenCalledWith('date', { ascending: false })
        expect(result).toEqual(mockData)
    })

    test('getByCategory filtra por categoría', async () => {
        const mockData = [{ id: 1, category: 'PROYECTOS' }]
        const orderMock = jest.fn().mockResolvedValue({ data: mockData, error: null })
        const eqMock = jest.fn().mockReturnValue({ order: orderMock })
        const selectMock = jest.fn().mockReturnValue({ eq: eqMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await newsService.getByCategory('PROYECTOS')

        expect(eqMock).toHaveBeenCalledWith('category', 'PROYECTOS')
        expect(result).toEqual(mockData)
    })

    test('getBySlug devuelve una noticia única', async () => {
        const mockItem = { id: 1, slug: 'news-1' }
        const singleMock = jest.fn().mockResolvedValue({ data: mockItem, error: null })
        const eqMock = jest.fn().mockReturnValue({ single: singleMock })
        const selectMock = jest.fn().mockReturnValue({ eq: eqMock })
        const fromMock = jest.fn().mockReturnValue({ select: selectMock })

        // @ts-ignore
        supabase.from = fromMock

        const result = await newsService.getBySlug('news-1')

        expect(eqMock).toHaveBeenCalledWith('slug', 'news-1')
        expect(result).toEqual(mockItem)
    })
})
