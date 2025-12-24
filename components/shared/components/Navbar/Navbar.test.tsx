
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

jest.mock('./data/navConfig', () => ({
    navConfig: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' }
    ]
}))

jest.mock('../Forms/Sponsor/SponsorModal', () => ({
    SponsorModal: ({ isOpen }: any) => isOpen ? <div data-testid="sponsor-modal">Sponsor Modal</div> : null
}))

jest.mock('../Contact/ContactFormModal', () => ({
    __esModule: true,
    default: ({ type }: any) => <div data-testid="contact-form-modal">Contact Form: {type}</div>
}))

jest.mock('./components/NavMobileMenu', () => ({
    __esModule: true,
    default: ({ onClose }: any) => (
        <div data-testid="mobile-menu">
            Mobile Menu
            <button onClick={onClose}>Close Menu</button>
        </div>
    )
}))

describe('Navbar component', () => {
    test('renderiza logo y enlaces de navegación', () => {
        render(<Navbar />)
        expect(screen.getByAltText('logo')).toBeInTheDocument()
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('About')).toBeInTheDocument()
    })

    test('abre menú móvil al hacer click en el botón', async () => {
        const user = userEvent.setup()
        render(<Navbar />)

        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

        // Find hamburger button (svg inside button) or button role that contains svg
        // Since aria-label is missing, we target by button role inside the header for mobile (check className lg:hidden)
        // Or finding by 'button' role generally since logic is simple
        // Let's assume the first button is the mobile menu toggle as there are no other buttons visible in desktop usually except maybe inside nav
        // But in mobile view, that button is visible.

        // Actually, let's use a more robust query if possible. The button wraps an SVG.
        // We can find button by class or just find ALL buttons and assume one of them triggers it.
        // Or better: fire click on the button wrapping the SVG.
        const buttons = screen.getAllByRole('button')
        // Need to be careful. Let's assume the button with SVG is the target.
        // Since we can't easily select by SVG content without aria-label, let's select by class if possible, but testing-library discourages that.
        // We'll rely on the fact it's the only button in the header initially besides logo link (which is a link).

        await user.click(buttons[0])

        expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

        // Close it
        await user.click(screen.getByText('Close Menu'))
        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    })
})
