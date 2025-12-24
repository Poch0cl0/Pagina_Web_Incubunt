import { swapMainImage } from './imageUtils'
import type { Image } from '../types/Image'

describe('swapMainImage', () => {
    let images: Image[];

    beforeEach(() => {
        images = [
            { id: '1', src: 'img1.jpg', alt: 'Imagen 1' },
            { id: '2', src: 'img2.jpg', alt: 'Imagen 2' },
            { id: '3', src: 'img3.jpg', alt: 'Imagen 3' }
        ]
    })

    test('intercambia la imagen principal con la seleccionada', () => {
        const result = swapMainImage(images, 2)

        expect(result[0].id).toBe('3')
        expect(result[2].id).toBe('1')
    })

    test('mantiene el orden del resto de imágenes', () => {
        const result = swapMainImage(images, 1)

        expect(result.map(img => img.id)).toEqual(['2', '1', '3'])
    })

    test('no muta el array original', () => {
        const originalCopy = [...images]

        swapMainImage(images, 1)

        expect(images).toEqual(originalCopy)
    })

    test('retorna un nuevo array', () => {
        const result = swapMainImage(images, 1)

        expect(result).not.toBe(images)
    })
})
