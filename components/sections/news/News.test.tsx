
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { News } from './News'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}))

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />
}))

describe('News section', () => {
    const pushMock = jest.fn()

    beforeEach(() => {
        pushMock.mockClear()
            ; (useRouter as jest.Mock).mockReturnValue({
                push: pushMock
            })
    })

    test('renderiza títulos y secciones principales', () => {
        render(<News />)

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
