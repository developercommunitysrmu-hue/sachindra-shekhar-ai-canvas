import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom Cosmic Colors
				cosmic: {
					blue: 'hsl(var(--cosmic-blue))',
					purple: 'hsl(var(--cosmic-purple))',
					pink: 'hsl(var(--cosmic-pink))',
					orange: 'hsl(var(--cosmic-orange))',
				},
				space: {
					gray: 'hsl(var(--space-gray))',
					deep: 'hsl(var(--deep-space))',
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
			},
			boxShadow: {
				'cosmic': 'var(--shadow-cosmic)',
				'purple': 'var(--shadow-purple)',
			},
			dropShadow: {
				'glow-blue': 'var(--glow-blue)',
				'glow-purple': 'var(--glow-purple)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Cosmic Animations
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%': { filter: 'brightness(1) drop-shadow(var(--glow-blue))' },
					'100%': { filter: 'brightness(1.2) drop-shadow(var(--glow-purple))' }
				},
				'cosmic-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				
				// Text Animations
				'typewriter': {
					'0%': { width: '0ch' },
					'100%': { width: '100%' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px hsl(var(--cosmic-blue)), 0 0 10px hsl(var(--cosmic-blue)), 0 0 15px hsl(var(--cosmic-blue))'
					},
					'50%': {
						boxShadow: '0 0 10px hsl(var(--cosmic-purple)), 0 0 20px hsl(var(--cosmic-purple)), 0 0 30px hsl(var(--cosmic-purple))'
					}
				},
				
				// Component Animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				// Cosmic Animations
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
				'cosmic-rotate': 'cosmic-rotate 20s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				
				// Text Animations
				'typewriter': 'typewriter 3s steps(40) 1s both',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				
				// Staggered Animations
				'fade-in-up-delay-100': 'fade-in-up 0.6s ease-out 0.1s both',
				'fade-in-up-delay-200': 'fade-in-up 0.6s ease-out 0.2s both',
				'fade-in-up-delay-300': 'fade-in-up 0.6s ease-out 0.3s both',
				'fade-in-up-delay-400': 'fade-in-up 0.6s ease-out 0.4s both',
				'fade-in-up-delay-500': 'fade-in-up 0.6s ease-out 0.5s both',
				'fade-in-up-delay-600': 'fade-in-up 0.6s ease-out 0.6s both',
				
				// Component Animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;