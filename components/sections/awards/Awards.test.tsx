
import { render, screen } from '@testing-library/react'
import { Awards } from './Awards'

// Mock child components
jest.mock('./components/AwardDesktopGrid', () => ({
    AwardDesktopGrid: () => <div data-testid="award-desktop-grid">Desktop Grid</div>
}))

jest.mock('./components/AwardMobileCarousel', () => ({
    AwardMobileCarousel: () => <div data-testid="award-mobile-carousel">Mobile Carousel</div>
}))

describe('Awards section', () => {
    test('renderiza el título y subtítulo', () => {
        render(<Awards />)

        expect(
            screen.getByRole('heading', { name: /reconocidos por la excelencia/i })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('heading', { name: /3 premios en concepmi/i })
        ).toBeInTheDocument()
    })

    test('renderiza los componentes de grid y carousel', () => {
        render(<Awards />)

        expect(screen.getByTestId('award-desktop-grid')).toBeInTheDocument()
        expect(screen.getByTestId('award-mobile-carousel')).toBeInTheDocument()
    })
})
