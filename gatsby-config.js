const dotenv = require('dotenv');
const path = require('path');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Between The Bookends',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sentinels`,
        short_name: `Sentinels`,
        start_url: `/`,
        background_color: `#343537`,
        theme_color: `#A06367`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `./src/images/Feeny Work Blue Sized.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ks4fk98gof0z',
        accessToken:
          'bf79b309976c449cf7efcf73fefdb880d58ede8f3cdbe2006afcdf142461ff11',
      },
    },
  ],
};
