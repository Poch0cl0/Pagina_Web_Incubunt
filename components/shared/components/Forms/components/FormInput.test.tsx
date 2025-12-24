
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormInput } from './FormInput'

describe('FormInput component', () => {
    test('renderiza etiqueta y placeholder', () => {
        render(
            <FormInput
                label="Nombre"
                placeholder="Ingresa tu nombre"
                value=""
                onChange={() => { }}
            />
        )
        expect(screen.getByText('Nombre')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ingresa tu nombre')).toBeInTheDocument()
    })

    test('muestra asterisco si es requerido', () => {
        render(
            <FormInput
                label="Nombre"
                placeholder="Placeholder"
                value=""
                onChange={() => { }}
                required
            />
        )
        expect(screen.getByText('*')).toBeInTheDocument()
    })

    test('llama a onChange al escribir', async () => {
        const onChange = jest.fn()
        const user = userEvent.setup()

        render(
            <FormInput
                label="Nombre"
                placeholder="Placeholder"
                value=""
                onChange={onChange}
            />
        )

        await user.type(screen.getByPlaceholderText('Placeholder'), 'Test')
        expect(onChange).toHaveBeenCalled()
    })

    test('muestra mensaje de error', () => {
        render(
            <FormInput
                label="Nombre"
                placeholder="Placeholder"
                value=""
                onChange={() => { }}
                error="Campo inválido"
            />
        )
        expect(screen.getByText('Campo inválido')).toBeInTheDocument()
    })
})
