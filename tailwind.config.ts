import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				white: 'var(--white)',
				grey: 'var(--grey)',
				blue: 'var(--blue)',
				black: 'var(--black)',
				white_transparent: 'var(--white-transparent)',
				grey_transparent: 'var(--grey-transparent)',
				black_transparent: 'var(--black-transparent)',
			},
			fontFamily: {
				germanica: ['var(--font-germanica)', 'sans-serif'],
				slussen_compressed_black: [
					'var(--font-slussen-compressed-black)',
					'sans-serif',
				],
				slussen_expended_black: [
					'var(--font-slussen-expended-black)',
					'sans-serif',
				],
				slussen_medium: ['var(--font-slussen-medium)', 'sans-serif'],
				slussen_regular: ['var(--font-slussen-regular)', 'sans-serif'],
				slussen_semibold: ['var(--font-slussen-semibold)', 'sans-serif'],
				slussen_bold: ['var(--font-slussen-bold)', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config
