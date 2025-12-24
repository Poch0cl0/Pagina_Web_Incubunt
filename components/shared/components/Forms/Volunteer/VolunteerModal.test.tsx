
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VolunteerModal } from './VolunteerModal'
import { sendVolunteerData } from '@/services/volunteerService'

jest.mock('@/services/volunteerService', () => ({
    sendVolunteerData: jest.fn()
}))

describe('VolunteerModal', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renderiza formulario cuando está abierto', () => {
        render(<VolunteerModal isOpen={true} onClose={() => { }} />)
        expect(screen.getByText(/sé voluntario/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/nombres/i)).toBeInTheDocument()
    })

    test('envía datos válidos', async () => {
        const user = userEvent.setup()
            ; (sendVolunteerData as jest.Mock).mockResolvedValue({ success: true })

        render(<VolunteerModal isOpen={true} onClose={() => { }} />)

        await user.type(screen.getByLabelText(/nombres/i), 'Jane')
        await user.type(screen.getByLabelText(/apellidos/i), 'Doe')
        await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
        await user.selectOptions(screen.getByLabelText(/área de interés/i), 'TI')

        await user.click(screen.getByRole('button', { name: /enviar/i }))

        await waitFor(() => {
            expect(sendVolunteerData).toHaveBeenCalledWith(expect.objectContaining({
                nombres: 'Jane',
                areaInteres: 'TI'
            }))
        })

        expect(screen.getByText(/¡bienvenido al equipo!/i)).toBeInTheDocument()
    })
})
