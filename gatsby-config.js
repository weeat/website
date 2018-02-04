module.exports = {
  siteMetadata: {
    title: 'WeEat App'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-113476677-1' }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ]
};
