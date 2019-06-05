const manifestOptions = {
	dir: "ltr",
	lang: "EN",
	name: 'Paperboy',
	short_name: 'Paperboy',
	description: 'A News app',
	orientation: "portrait",
	scope: "/",
	start_url: '/',
	background_color: '#e81b1f',
	theme_color: '#e81b1f',
	display: 'standalone',
	related_applications: [],
	prefer_related_applications: false,
	icon: "src/assets/images/app-icon.png",
	icons: [

		{
			src: "/android/android-launchericon-512-512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/android/android-launchericon-192-192.png",
			sizes: "192x192",
			type: "image/png"
		},
	],
};

const analyticsOptions = {
	trackingId: 'UA-54851814-1',
	head: true,
	anonymize: true,
};

const offlineOptions = {
	cacheId: 'paperboy-cache',
};

module.exports = {
	siteMetadata: {
		title: 'Paperboy',
		author: 'João Dias',
		url: 'https://www.getpaperboy.xyz',
		siteUrl: 'https://www.getpaperboy.xyz',
		description: 'A news app',
	},
	plugins: [
		// Typescript
		'gatsby-plugin-typescript',

		// React Helmet
		'gatsby-plugin-react-helmet',

		// Styling
		'gatsby-plugin-styled-components',
		'gatsby-plugin-sass',

		// Site Configs
		{
			resolve: 'gatsby-plugin-manifest',
			options: manifestOptions,
		},
		{
			resolve: 'gatsby-plugin-offline',
			options: offlineOptions,
		},
	],
};
