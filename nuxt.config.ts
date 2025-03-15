export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxtjs/supabase',
		'@nuxtjs/i18n',
		'@formkit/auto-animate/nuxt',
		'@vueuse/nuxt',
		'@hypernym/nuxt-gsap',
	],

	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],

	devtools: { enabled: true },
	css: ['~/assets/styles/main.css'],

	ui: {
		theme: {
			colors: ['cerise', 'blue', 'green', 'error'],
		},
	},

	i18n: {
		strategy: 'no_prefix',
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				file: '/locales/en.json',
				name: 'English',
			},
			{
				code: 'ru',
				file: '/locales/ru.json',
				name: 'Русский',
			},
		],
	},

	supabase: {
		redirect: false,
	},

	compatibilityDate: '2025-01-10',
});
