module.exports = {
  siteMetadata: {
    title: 'Raleigh Beach'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'raleigh-beach-store',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/raleigh_beach_logo.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-shopify2',
      options: {
        shopName: 'raleigh-beach',
        accessToken: 'ff7a548d70adb92fc0dbdf4f161e6ca2',
        verbose: true
      }
    },
    'gatsby-plugin-offline'
  ]
};
