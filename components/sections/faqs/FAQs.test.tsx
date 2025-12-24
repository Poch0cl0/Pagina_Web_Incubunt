
import { render, screen } from '@testing-library/react'
import { FAQs } from './FAQs'

jest.mock('./components/DropDownQuestion', () => ({
    DropDownQuestion: () => <div data-testid="dropdown-questions">Questions List</div>
}))

jest.mock('@/services/faqsService', () => ({
    faqsService: {
        getAll: jest.fn().mockResolvedValue([])
    }
}))

describe('FAQs section', () => {
    test('renderiza el título y componente de preguntas', async () => {
        render(<FAQs />)

        expect(
            screen.getByRole('heading', { name: /^preguntas frecuentes$/i })
        ).toBeInTheDocument()

        expect(screen.getByText(/encuentra aquí las respuestas/i)).toBeInTheDocument()

        // Wait for the async effect
        expect(await screen.findByTestId('dropdown-questions')).toBeInTheDocument()
    })
})
