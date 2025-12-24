
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

jest.mock('@/components/shared/components/Forms/Sponsor/SponsorModal', () => ({
    SponsorModal: ({ isOpen }: { isOpen: boolean }) => (
        isOpen ? <div data-testid="sponsor-modal">Modal Abierto</div> : null
    )
}))

describe('Contact section', () => {
    test('renderiza el título y descripción', () => {
        render(<Contact />)

        expect(
            screen.getByRole('heading', { name: /juntos impulsando el cambio/i })
        ).toBeInTheDocument()

        expect(
            screen.getByText(/tu apoyo hoy es la innovación del mañana/i)
        ).toBeInTheDocument()
    })

    test('abre el modal al hacer click en el botón', async () => {
        const user = userEvent.setup()
        render(<Contact />)

        expect(screen.queryByTestId('sponsor-modal')).not.toBeInTheDocument()

        await user.click(
            screen.getByRole('button', { name: /abrir formulario de patrocinio/i })
        )

        expect(screen.getByTestId('sponsor-modal')).toBeInTheDocument()
    })
})
