/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#06b6d4',
                    glow: '#22d3ee',    
                    dark: '#0e7490',
                    light: '#cffafe',
                },
                secondary: {
                    DEFAULT: '#020617', 
                    surface: '#0f172a', 
                    light: '#1e293b',
                },
                accent: {
                    purple: '#8b5cf6', 
                    pink: '#f43f5e',  
                    gold: '#fbbf24',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
