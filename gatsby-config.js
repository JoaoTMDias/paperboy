const path = require("path");

const manifestOptions = {
	dir: "ltr",
	lang: "EN",
	name: "Paperboy",
	short_name: "Paperboy",
	description: "A News app",
	orientation: "portrait",
	scope: "/",
	start_url: "/",
	background_color: "#e81b1f",
	theme_color: "#e81b1f",
	display: "standalone",
	related_applications: [],
	prefer_related_applications: false,
	icon: "src/assets/images/app-icon.png",
	icons: [
		{
			src: "/android/android-launchericon-144-144.png",
			sizes: "144x144",
			type: "image/png",
		},
		{
			src: "/android/android-launchericon-192-192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/android/android-launchericon-512-512.png",
			sizes: "512x512",
			type: "image/png",
		},
	],
	shortcuts: [
		{
			name: "Get Latest News",
			short_name: "Latest News",
			description: "View a list of the most recent news",
			url: "/news?utm_source=homescreen",
			icons: [{ src: "/android/android-launchericon-192-192.png", sizes: "192x192" }],
		},
		{
			name: "Go to Saved News",
			short_name: "Saved News",
			description: "View a list your previously saved articles",
			url: "/saved?utm_source=homescreen",
			icons: [{ src: "/android/android-launchericon-192-192.png", sizes: "192x192" }],
		},
	],
};

const analyticsOptions = {
	trackingId: "UA-54851814-1",
	head: true,
	anonymize: true,
};

const offlineOptions = {
	cacheId: "paperboy-cache",
};

const netlifyHeaders = {
	options: {
		headers: {
			"/*": ["Access-Control-Allow-Origin: *", "Content-Type: application/font-woff2"],
		},
	},
};

const importOptions = {
	src: path.join(__dirname, "src"),
	pages: path.join(__dirname, "src/pages"),
	data: path.join(__dirname, "src/data"),
	helpers: path.join(__dirname, "src/helpers"),
	components: path.join(__dirname, "src/components"),
};

module.exports = {
	siteMetadata: {
		title: "Paperboy",
		author: "João Dias",
		url: "https://www.getpaperboy.xyz",
		siteUrl: "https://www.getpaperboy.xyz",
		description: "A news app",
	},
	plugins: [
		// Typescript
		"gatsby-plugin-typescript",
		{
			resolve: "gatsby-plugin-root-import",
			options: importOptions,
		},

		// React Helmet
		"gatsby-plugin-react-helmet",

		// Styling
		"gatsby-plugin-styled-components",
		"gatsby-plugin-sass",

		// Site Configs
		{
			resolve: "gatsby-plugin-netlify",
			options: netlifyHeaders,
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: manifestOptions,
		},
		{
			resolve: "gatsby-plugin-offline",
			options: offlineOptions,
		},
	],
};
