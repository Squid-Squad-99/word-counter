/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base: '#FFF7E9',
				dominat: {
					1: '#F59E0B',
					2: '#AC8B67'
				},
				complementary: {
					1: '#F59E0B',
					2: '#009751'
				}
			}
		}
	},
	plugins: []
};
