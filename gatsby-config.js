/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
			name: "Search news",
			short_name: "Search news",
			description: "Find the news you want",
			url: "/search?utm_source=homescreen",
			icons: [{ src: "/shortcut/shortcut-search-icon.png", sizes: "192x192" }],
		},
		{
			name: "Saved articles",
			short_name: "Saved News",
			description: "View a list your previously saved articles",
			url: "/saved?utm_source=homescreen",
			icons: [{ src: "/shortcut/shortcut-saved-icon.png", sizes: "192x192" }],
		},
	],
};

const offlineOptions = {
	cacheId: "paperboy-cache-offline",
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
