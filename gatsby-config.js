const manifestOptions = {
  name: 'Paperboy',
  short_name: 'paperboy',
  description: 'A News app',
  start_url: '/',
  background_color: '#ffffff',
  theme_color: '#e81b1f',
  display: 'standalone',
  icons: [
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: 'android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

const analyticsOptions = {
  trackingId: 'UA-54851814-1',
  head: true,
  anonymize: true,
}

const offlineOptions = {
  cacheId: 'paperboy-cache',
}

const sitemapOptions = {
  output: '/sitemap.xml',
  query: `
      {
          site {
              siteMetadata {
                  siteUrl
              }
          }

          allSitePage {
              edges {
                  node {
                      path
                  }
              }
          }
      }`,
}

module.exports = {
  siteMetadata: {
    title: 'Paperboy',
    author: 'João Dias',
    url: 'https://joaodias.me',
    siteUrl: 'https://paperboy.website',
    description: 'A news app',
  },
  plugins: [
    // Typescript
    'gatsby-plugin-typescript',

    // React Helmet
    'gatsby-plugin-react-helmet',

    // Site Configs
    {
      resolve: 'gatsby-plugin-sitemap',
      options: sitemapOptions,
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions,
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: offlineOptions,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: analyticsOptions,
    },

    // Images
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // Styling
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    // Absolute Imports,
    'gatsby-plugin-resolve-src',
  ],
}
