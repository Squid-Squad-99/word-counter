/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base: '#FFF7E9',
				primary: '#F59E0B',
				secondary: '#AC8B67',
				complementary: '#F59E0B'
			}
		}
	},
	plugins: []
};
