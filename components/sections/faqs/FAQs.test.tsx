
import { render, screen } from '@testing-library/react'
import { FAQs } from './FAQs'

jest.mock('./components/DropDownQuestion', () => ({
    DropDownQuestion: () => <div data-testid="dropdown-questions">Questions List</div>
}))

describe('FAQs section', () => {
    test('renderiza el título y componente de preguntas', () => {
        render(<FAQs />)

        expect(
            screen.getByRole('heading', { name: /^preguntas frecuentes$/i })
        ).toBeInTheDocument()

        expect(screen.getByText(/encuentra aquí las respuestas/i)).toBeInTheDocument()
        expect(screen.getByTestId('dropdown-questions')).toBeInTheDocument()
    })
})
