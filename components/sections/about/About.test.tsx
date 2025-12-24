import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'
import { swapMainImage } from '@/utils/imageUtils'

// mock del util
jest.mock('@/utils/imageUtils', () => ({
    swapMainImage: jest.fn()
}))

// mock de imágenes
jest.mock('./data/aboutImages', () => ({
    aboutImages: [
        { id: 1, src: '/img1.jpg', alt: 'Imagen 1' },
        { id: 2, src: '/img2.jpg', alt: 'Imagen 2' },
        { id: 3, src: '/img3.jpg', alt: 'Imagen 3' }
    ]
}))

describe('About section', () => {
    test('renderiza el título y la imagen principal', () => {
        render(<About />)

        expect(
            screen.getByRole('heading', { name: /quienes somos/i })
        ).toBeInTheDocument()

        expect(
            screen.getByAltText('Imagen 1')
        ).toBeInTheDocument()
    })

    test('cambia la imagen principal al hacer click en una miniatura', async () => {
        const user = userEvent.setup()

            // simulamos lo que debería devolver swapMainImage
            ; (swapMainImage as jest.Mock).mockReturnValue([
                { id: 2, src: '/img2.jpg', alt: 'Imagen 2' },
                { id: 1, src: '/img1.jpg', alt: 'Imagen 1' },
                { id: 3, src: '/img3.jpg', alt: 'Imagen 3' }
            ])

        render(<About />)

        await user.click(
            screen.getByRole('button', { name: /ver imagen 2/i })
        )

        expect(swapMainImage).toHaveBeenCalledWith(
            expect.any(Array),
            1
        )

        expect(
            screen.getByAltText('Imagen 2')
        ).toBeInTheDocument()
    })
})
