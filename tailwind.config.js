/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/routes/**/*.{svelte,ts,js}'],
	theme: {
		colors: {
			powder: '#B8E3E9',
			navy: '#202B3D',
			white: {
				DEFAULT: '#ffffff',
				transparent: '#ffffffcc'
			},
			black: '#000000',
			mineshaft: '#262626',
			'storm-grey': '#73767f',
			'dark-grey': '#757c82',
			manatee: '#989aa2',
			mercury: '#e1e1e1',
			moon: '#f4f6fa',
			'athens-grey': '#f4f5f8'
		},
		extend: {
			fontFamily: {
				gotham: ['Gotham', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			},
			animation: {
				'scroll-line': 'scroll 5s linear infinite'
			}
		}
	},
	plugins: []
};
