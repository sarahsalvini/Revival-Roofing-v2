/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', './src/routes/**/*.{svelte,ts,js}'],
	theme: {
		colors: {
			// Main theme colors
			black: '#000000',
			white: '#FFFFFF',
			transparent: 'transparent',
			// Accent colors
			powder: '#B8E3E9', // Soft, cool accent color
			primary: '#B8E3E9', // Set primary to powder for consistency
			secondary: '#A9D6DC', // Slightly darker shade of powder, optional
			navy: '#202B3D',
			manatee: '#989AA2',
			mercury: '#E1E1E1',
			'white-smoke': '#F0F0F0',
			bone: '#F9F9F9',
			// Neutral colors for text and backgrounds
			gray: {
				100: '#F3F4F6',
				200: '#E5E7EB',
				300: '#D1D5DB',
				400: '#9CA3AF',
				500: '#6B7280',
				600: '#4B5563',
				700: '#374151',
				800: '#1F2937',
				900: '#111827' // Dark gray, useful for high contrast
			},

			// Optional extra color variants
			accent: '#B8E3E9', // Define a general accent color (same as powder)
			dark: '#0D1117', // Very dark shade, closer to black than navy
			'dark-2': '#161B22', // Slightly lighter than dark, for subtle contrast
			'dark-3': '#1C2128', // Another step lighter, still dark but softer
			'dark-4': '#222731', // Lightest of the original dark shades, good for cards or sections
			'dark-5': '#2A2F37', // A slightly lighter tone for highlighted sections
			'dark-6': '#313640' // Lightest shade in the dark family, ideal for subtle backgrounds or borders
		},
		container: {
			center: true, // Ensures the container is centered
			padding: {
				DEFAULT: '1rem', // Default padding for all breakpoints
				sm: '1rem', // Padding for small screens and above
				md: '1rem', // Padding for medium screens and above
				lg: '2rem', // Padding for large screens and above
				xl: '4rem' // Padding for extra-large screens and above
			}
		},

		extend: {
			boxShadow: {
				'dark-right-sm': '1px -1px 2px 0 rgba(13, 17, 23, 0.05)',
				'dark-right': '3px -1px 3px 0 rgba(13, 17, 23, 0.1)',
				'dark-right-md': '6px -4px 6px -1px rgba(13, 17, 23, 0.2)',
				'dark-right-lg': '15px -10px 15px -3px rgba(13, 17, 23, 0.4)',
				'dark-right-xl': '25px -20px 25px -5px rgba(13, 17, 23, 0.6)',
				'dark-right-2xl': '50px -25px 50px -12px rgba(13, 17, 23, 0.8)',

				// Powder Right shadows
				'powder-right-sm': '1px -1px 2px 0 rgba(184, 227, 233, 0.05)',
				'powder-right': '3px -1px 3px 0 rgba(184, 227, 233, 0.1)',
				'powder-right-md': '6px -4px 6px -1px rgba(184, 227, 233, 0.1)',
				'powder-right-lg': '15px -10px 15px -3px rgba(184, 227, 233, 0.1)',
				'powder-right-xl': '25px -20px 25px -5px rgba(184, 227, 233, 0.1)',
				'powder-right-2xl': '50px -25px 50px -12px rgba(184, 227, 233, 0.25)'
			},

			fontFamily: {
				gotham: ['Gotham', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				fadeInDown: {
					'0%': { opacity: 0, transform: 'translateY(-50px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				}
			},
			animation: {
				'scroll-line': 'scroll 5s linear infinite',
				'fade-in-down': 'fadeInDown 1s ease-out'
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				// Section One - Clip Path Angle
				// '.custom-clip-one': {
				// 	clipPath: 'polygon(0% 0%, 0% 100%, 100% calc(100% - 5vw), 100% 0%)',
				// 	WebkitClipPath: 'polygon(0% 0%, 0% 100%, 100% calc(100% - 5vw), 100% 0%)'
				// },
				'.custom-clip-one': {
					clipPath: 'polygon(0% 0%, 0% 100%, 100% calc(100% - 5vw), 100% 0%)',
					WebkitClipPath: 'polygon(0% 0%, 0% 100%, 100% calc(100% - 5vw), 100% 0%)'
				},
				// Section Two - Clip Path Full Width Arrow
				'.custom-clip-two': {
					clipPath:
						'polygon(0% 0%, 0% 100%, 0% calc(100% - 5vw), 50% 100%, 100% calc(100% - 5vw), 100% 0%)',
					WebkitClipPath:
						'polygon(0% 0%, 0% 100%, 0% calc(100% - 5vw), 50% 100%, 100% calc(100% - 5vw), 100% 0%)'
				},
				// Section Three - Border Arrow
				'.custom-border-arrow': {
					position: 'relative'
				},
				'.custom-border-arrow::after': {
					position: 'absolute',
					content: '""',
					zIndex: '1',
					bottom: '-25px',
					borderStyle: 'solid',
					borderWidth: '25px 50px 0px 50px',
					borderColor: 'transparent transparent transparent transparent' // Default to transparent
				},
				'.bg-mercury.custom-border-arrow::after': {
					borderTopColor: '#E1E1E1' // Light mode arrow border
				}
				// Border for dark mode
				// '.dark .bg-dark-4 .custom-border-arrow::after': {
				// 	borderTopColor: '#222731' // Dark mode arrow border (example color)
				// }
			});
		}
	]
};
