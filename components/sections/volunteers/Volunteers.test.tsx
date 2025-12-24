
import { render, screen } from '@testing-library/react'
import { VolunteersTeam } from './Volunteers'

jest.mock('next/link', () => ({
    __esModule: true,
    default: ({ children, href }: any) => <a href={href}>{children}</a>
}))

describe('VolunteersTeam section', () => {
    test('renderiza títulos y enlace al equipo', () => {
        render(<VolunteersTeam />)

        expect(screen.getByText(/nuestro motor/i)).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /los voluntarios/i })
        ).toBeInTheDocument()

        const link = screen.getByRole('link', { name: /conoce al equipo/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/volunteers')
    })

    test('renderiza imagen del equipo', () => {
        render(<VolunteersTeam />)
        expect(screen.getByAltText('Voluntarios')).toBeInTheDocument()
    })
})
