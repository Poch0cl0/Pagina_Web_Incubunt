
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

// Mocks
jest.mock('../../shared/components/Forms/Volunteer/VolunteerModal', () => ({
    VolunteerModal: ({ isOpen }: { isOpen: boolean }) => isOpen ? <div data-testid="volunteer-modal">Volunteer Modal</div> : null
}))

jest.mock('../../shared/components/Forms/Sponsor/SponsorModal', () => ({
    SponsorModal: ({ isOpen }: { isOpen: boolean }) => isOpen ? <div data-testid="sponsor-modal">Sponsor Modal</div> : null
}))

jest.mock('./components/HeroMobile', () => ({
    HeroMobile: ({ onVolunteerClick, onSponsorClick }: any) => (
        <div data-testid="hero-mobile">
            <button onClick={onVolunteerClick}>Open Vol Mobile</button>
            <button onClick={onSponsorClick}>Open Sponsor Mobile</button>
        </div>
    )
}))

jest.mock('./components/HeroDesktop', () => ({
    HeroDesktop: ({ onVolunteerClick }: any) => (
        <div data-testid="hero-desktop">
            <button onClick={onVolunteerClick}>Open Vol Desktop</button>
        </div>
    )
}))

jest.mock('./components/HeroPartners', () => ({
    HeroPartners: () => <div data-testid="hero-partners">Partners</div>
}))

describe('Hero section', () => {
    test('renderiza componentes principales', () => {
        render(<Hero />)
        expect(screen.getByTestId('hero-mobile')).toBeInTheDocument()
        expect(screen.getByTestId('hero-desktop')).toBeInTheDocument()
        expect(screen.getByTestId('hero-partners')).toBeInTheDocument()
    })

    test('abre modal de voluntariado desde desktop', async () => {
        const user = userEvent.setup()
        render(<Hero />)

        expect(screen.queryByTestId('volunteer-modal')).not.toBeInTheDocument()

        await user.click(screen.getByText('Open Vol Desktop'))

        expect(screen.getByTestId('volunteer-modal')).toBeInTheDocument()
    })

    test('abre modal de sponsor desde mobile', async () => {
        const user = userEvent.setup()
        render(<Hero />)

        expect(screen.queryByTestId('sponsor-modal')).not.toBeInTheDocument()

        await user.click(screen.getByText('Open Sponsor Mobile'))

        expect(screen.getByTestId('sponsor-modal')).toBeInTheDocument()
    })
})
