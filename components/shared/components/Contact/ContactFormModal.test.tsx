
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactFormModal from './ContactFormModal'

// Mock fetch
global.fetch = jest.fn()

describe('ContactFormModal component', () => {
    beforeEach(() => {
        ; (global.fetch as jest.Mock).mockClear()
    })

    test('renderiza formulario de tipo promocion', () => {
        render(<ContactFormModal type="promocion" onClose={() => { }} />)
        expect(screen.getByText('Formulario de Promoción')).toBeInTheDocument()
        // Check for inputs by name attribute since labels are not associated
        expect(document.querySelector('input[name="Nombres"]')).toBeInTheDocument()
        expect(document.querySelector('select[name="Tipo_promocion"]')).toBeInTheDocument()
    })

    test('renderiza formulario de tipo voluntario', () => {
        render(<ContactFormModal type="voluntario" onClose={() => { }} />)
        expect(screen.getByText('Formulario de Voluntario')).toBeInTheDocument()
        expect(document.querySelector('select[name="Area"]')).toBeInTheDocument()
    })

    test('envía el formulario correctamente', async () => {
        const user = userEvent.setup()
            ; (global.fetch as jest.Mock).mockResolvedValue({
                json: () => Promise.resolve({ message: 'Success' })
            })

        const { container } = render(<ContactFormModal type="promocion" onClose={() => { }} />)

        const inputNombres = container.querySelector('input[name="Nombres"]')
        const inputApellidos = container.querySelector('input[name="Apellidos"]')
        const inputEmail = container.querySelector('input[name="Email"]')

        if (!inputNombres || !inputApellidos || !inputEmail) throw new Error('Inputs not found')

        await user.type(inputNombres, 'John')
        await user.type(inputApellidos, 'Doe')
        await user.type(inputEmail, 'john@example.com')

        // Submit
        await user.click(screen.getByRole('button', { name: /enviar/i }))

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1)
        })
    })

    test('cierra el modal al hacer click en cerrar', async () => {
        const onClose = jest.fn()
        const user = userEvent.setup()
        render(<ContactFormModal type="promocion" onClose={onClose} />)

        await user.click(screen.getByRole('button', { name: /cerrar/i }))
        expect(onClose).toHaveBeenCalledTimes(1)
    })
})
