
import { render, screen } from '@testing-library/react'
import Home from './page'

// Mock all child components
jest.mock('@/components/shared/components/Navbar/Navbar', () => ({
    __esModule: true,
    default: () => <div data-testid="navbar">Navbar</div>
}))
jest.mock('@/components/sections/hero/Hero', () => ({
    Hero: () => <div data-testid="hero">Hero</div>
}))
jest.mock('@/components/sections/about/About', () => ({
    About: () => <div data-testid="about">About</div>
}))
jest.mock('@/components/sections/identity/MisionVisionValores', () => ({
    MisionVisionValores: () => <div data-testid="identity">Identity</div>
}))
jest.mock('@/components/sections/awards/Awards', () => ({
    Awards: () => <div data-testid="awards">Awards</div>
}))
jest.mock('@/components/sections/volunteers/Volunteers', () => ({
    VolunteersTeam: () => <div data-testid="volunteers">Volunteers</div>
}))
jest.mock('@/components/sections/contact/Contact', () => ({
    Contact: () => <div data-testid="contact">Contact</div>
}))
jest.mock('@/components/sections/news/News', () => ({
    News: () => <div data-testid="news">News</div>
}))
jest.mock('@/components/sections/faqs/FAQs', () => ({
    FAQs: () => <div data-testid="faqs">FAQs</div>
}))
jest.mock('@/components/shared/components/Footer/Footer', () => ({
    Footer: () => <div data-testid="footer">Footer</div>
}))

describe('Home Page', () => {
    test('renderiza todas las secciones principales', () => {
        render(<Home />)

        expect(screen.getByTestId('navbar')).toBeInTheDocument()
        expect(screen.getByTestId('hero')).toBeInTheDocument()
        expect(screen.getByTestId('about')).toBeInTheDocument()
        expect(screen.getByTestId('identity')).toBeInTheDocument()
        expect(screen.getByTestId('awards')).toBeInTheDocument()
        expect(screen.getByTestId('volunteers')).toBeInTheDocument()
        expect(screen.getByTestId('contact')).toBeInTheDocument()
        expect(screen.getByTestId('news')).toBeInTheDocument()
        expect(screen.getByTestId('faqs')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
