
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SponsorModal } from './SponsorModal'
import { sendSponsorData } from '@/services/sponsorService'

jest.mock('@/services/sponsorService', () => ({
    sendSponsorData: jest.fn()
}))

jest.mock('../components/RadioButton', () => ({
    RadioButton: ({ label, value, selectedValue, onChange }: any) => (
        <label>
            <input
                type="radio"
                name="sponsorType"
                value={value}
                checked={value === selectedValue}
                onChange={() => onChange(value)}
            />
            {label}
        </label>
    )
}))

jest.mock('../components/FormInput', () => ({
    FormInput: ({ onChange, placeholder, value, ...props }: any) => (
        <input
            data-testid={`input-${placeholder}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...props}
        />
    )
}))

jest.mock('../components/FormTextarea', () => ({
    FormTextarea: ({ onChange, placeholder, value, ...props }: any) => (
        <textarea
            data-testid={`textarea-${placeholder}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...props}
        />
    )
}))

describe('SponsorModal', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('no renderiza si isOpen es false', () => {
        render(<SponsorModal isOpen={false} onClose={() => { }} />)
        expect(screen.queryByText(/ponte en contacto con nosotros/i)).not.toBeInTheDocument()
    })

    test('renderiza correctamente si isOpen es true', () => {
        render(<SponsorModal isOpen={true} onClose={() => { }} />)
        expect(screen.getByText(/ponte en contacto con nosotros/i)).toBeInTheDocument()
        expect(screen.getByTestId('input-Nombres')).toBeInTheDocument()
    })

    test('envía datos válidos', async () => {
        const user = userEvent.setup()
            ; (sendSponsorData as jest.Mock).mockResolvedValue({ success: true })

        render(<SponsorModal isOpen={true} onClose={() => { }} />)

        // Fill form
        await user.type(screen.getByTestId('input-Empresa'), 'Test Corp')
        await user.type(screen.getByTestId('input-Nombres'), 'John')
        await user.type(screen.getByTestId('input-Apellidos'), 'Doe')
        await user.type(screen.getByTestId('input-tu@empresa.com'), 'john@example.com')
        await user.type(screen.getByTestId('input-900000000'), '987654321')
        await user.type(screen.getByTestId('textarea-Déjanos un mensaje'), 'Hola')

        // Submit
        await user.click(screen.getByRole('button', { name: /enviar/i }))

        await waitFor(() => {
            expect(sendSponsorData).toHaveBeenCalledWith(expect.objectContaining({
                Empresa: 'Test Corp',
                Nombres: 'John',
                Celular: '987654321'
            }))
        })

        expect(screen.getByText(/¡mensaje enviado!/i)).toBeInTheDocument()
    })
})
