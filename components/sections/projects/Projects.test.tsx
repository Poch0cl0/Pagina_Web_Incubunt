
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

jest.mock('./projects-sections/PSection1', () => ({
    PSection1: ({ onClose }: any) => (
        <div data-testid="psection1">
            <button onClick={onClose}>Close 1</button>
        </div>
    )
}))

jest.mock('./projects-sections/PSection2', () => ({
    PSection2: ({ onClose }: any) => (
        <div data-testid="psection2">
            <button onClick={onClose}>Close 2</button>
        </div>
    )
}))

describe('Projects section', () => {
    test('renderiza el título principal', () => {
        render(<Projects />)
        expect(screen.getByText(/proyectos más destacados/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /ver más/i })).toBeInTheDocument()
    })

    test('abre section1 (PSection2 component) y lo cierra', async () => {
        const user = userEvent.setup()
        render(<Projects />)

        // Logic in component: 'section2' maps to PSection2 component, 'section1' maps to PSection1 component.
        // But the mapping in code is:
        // Button 1 (Proyecto 1) -> handlePlayClick('section2') -> Shows PSection2
        // Button 2 (Proyecto 2) -> handlePlayClick('section1') -> Shows PSection1

        // Let's find buttons by alt text of images inside them or role
        const buttons = screen.getAllByRole('button')
        // Need to be specific.
        // The play buttons have images with alt "Imagen play"
        const playButtons = screen.getAllByAltText('Imagen play')

        // Click first play button (assumed Project 1 -> Section 2)
        await user.click(playButtons[0])

        // Should show PSection2
        expect(await screen.findByTestId('psection2')).toBeInTheDocument()

        // Close it
        await user.click(screen.getByText('Close 2'))
        expect(screen.queryByTestId('psection2')).not.toBeInTheDocument()
    })
})
