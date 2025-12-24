
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

jest.mock('./components/DesktopFoter', () => ({
    DesktopFooter: () => <div data-testid="desktop-footer">Desktop Footer</div>
}))

jest.mock('./components/MobileFooter', () => ({
    MobileFooter: () => <div data-testid="mobile-footer">Mobile Footer</div>
}))

describe('Footer component', () => {
    test('renderiza componentes de desktop y mobile', () => {
        render(<Footer />)
        expect(screen.getByTestId('desktop-footer')).toBeInTheDocument()
        expect(screen.getByTestId('mobile-footer')).toBeInTheDocument()
    })
})
