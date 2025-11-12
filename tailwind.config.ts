import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    DEFAULT: '#0C67AD',
                    light: '#5A9BD4',
                    dark: '#084B7A',
                },
                red: {
                    DEFAULT: '#F54107',
                    light: '#F87A52',
                    dark: '#BF3000',
                },
                yellow: {
                    DEFAULT: '#FFC107',
                },
                green: {
                    DEFAULT: '#4CAF50',
                },
            },
        },
    },
    plugins: [],
}
export default config