
import { render, screen } from '@testing-library/react'
import { Awards } from './Awards'

// Mock child components
jest.mock('./components/AwardDesktopGrid', () => ({
    AwardDesktopGrid: () => <div data-testid="award-desktop-grid">Desktop Grid</div>
}))

jest.mock('./components/AwardMobileCarousel', () => ({
    AwardMobileCarousel: () => <div data-testid="award-mobile-carousel">Mobile Carousel</div>
}))

jest.mock('@/services/awardService', () => ({
    awardsService: {
        getAll: jest.fn().mockResolvedValue([
            { id_award: 1, title: 'Award 1', image_url: '', year: 2024 },
            { id_award: 2, title: 'Award 2', image_url: '', year: 2024 },
            { id_award: 3, title: 'Award 3', image_url: '', year: 2024 },
        ])
    }
}))

describe('Awards section', () => {
    test('renderiza el título y subtítulo', async () => {
        render(<Awards />)

        expect(
            screen.getByRole('heading', { name: /reconocidos por la excelencia/i })
        ).toBeInTheDocument()

        expect(
            await screen.findByRole('heading', { name: /3 premios en concepmi/i })
        ).toBeInTheDocument()
    })

    test('renderiza los componentes de grid y carousel', async () => {
        render(<Awards />)

        expect(await screen.findByTestId('award-desktop-grid')).toBeInTheDocument()
        expect(await screen.findByTestId('award-mobile-carousel')).toBeInTheDocument()
    })
})
