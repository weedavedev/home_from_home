import forms from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { theme } from './src/lib/styles/branding_styles';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: theme.screens,
		extend: {
			colors: theme.colors,
			fontFamily: theme.fonts
		}
	},
	plugins: [typographyPlugin, forms]
} satisfies Config;