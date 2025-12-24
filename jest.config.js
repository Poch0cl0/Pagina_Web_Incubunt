const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Proporciona la ruta a Next.js para cargar next.config.js y los archivos .env en el entorno de pruebas
    dir: './',
})

// Agrega cualquier configuración personalizada que quieras pasar a Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
}

// createJestConfig se exporta de esta manera para asegurar que next/jest pueda cargar la configuración de Next.js, la cual es asíncrona
module.exports = createJestConfig(customJestConfig)
