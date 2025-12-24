
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { News } from './News'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ fill, ...props }: any) => <img {...props} />
}))

jest.mock('@/services/newsService', () => ({
    newsService: {
        getAll: jest.fn().mockResolvedValue([
            {
                id_news: 1,
                title: "Noticia Mock",
                slug: "noticia-mock",
                description: "Desc",
                image_url: "/mock.jpg",
                date: "2024-01-01",
                category: "NOTICIAS"
            }
        ]),
        getByCategory: jest.fn().mockResolvedValue([])
    }
}))

describe('News section', () => {
    const pushMock = jest.fn()

    beforeEach(() => {
        pushMock.mockClear()
            ; (useRouter as jest.Mock).mockReturnValue({
                push: pushMock
            })
    })

    test('renderiza títulos y secciones principales', async () => {
        render(<News />)

        // Wait for state update to complete by checking for the mocked image URL
        // Using waitFor because we need to check an attribute change on existing elements
        await waitFor(() => {
            const images = screen.getAllByRole('img', { name: "Grupo de estudiantes" })
            expect(images.length).toBeGreaterThan(0)
            expect(images[0]).toHaveAttribute('src', '/mock.jpg')
        })

        // Title exists in multiple views (mobile/desktop), using getAllByRole or specific queries if needed.
        // Using getAll to be safe against responsive duplicates in DOM.
        expect(screen.getAllByText(/noticias/i).length).toBeGreaterThan(0)
        expect(screen.getAllByText(/proyectos/i).length).toBeGreaterThan(0)
        expect(screen.getAllByText(/comunidad/i).length).toBeGreaterThan(0)
    })

    test('navega a proyectos al hacer click en leer más', async () => {
        const user = userEvent.setup()
        render(<News />)

        // There are multiple buttons, click one of them
        const buttons = screen.getAllByText(/leer más/i)
        // Filter for one inside a projects card or just click the first one if acceptable
        // Let's assume the first one is fine or target specifically

        await user.click(buttons[0])

        expect(pushMock).toHaveBeenCalledWith(expect.stringMatching(/^\/(proyectos|comunidad)$/))
    })
})
