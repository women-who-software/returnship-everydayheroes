/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let env = process.env.NODE_ENV || 'development';

// This adds dotenv (for storing environment variables) to gatsby
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
  /* Your site config here */
  plugins: [

    
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-transformer-remark",
          options: {
            "excerpt_separator": `<!-- endexcerpt -->`,
            plugins: [
              `gatsby-remark-relative-images`,
              {
                resolve: `gatsby-remark-images`,
                options: {
                    maxWidth: 750,
                    linkImagesToOriginal: false
                },
              }, {
                resolve: `gatsby-remark-embed-video`,
                options: {
                  width: 800,
                  ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                  height: 400, // Optional: Overrides optional.ratio
                  related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                  noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                  urlOverrides: [
                    {
                      id: 'youtube',
                      embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                    },
                  ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                  containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                },
              },


            ],
            
          },
    },

    `gatsby-plugin-netlify-cms`,

        {
          resolve: `gatsby-source-buzzsprout-api`,
          options: {
            // You will need to generate an access token and get the podcast ID from your account
            // https://github.com/Buzzsprout/buzsprout-api#authentication
            name: `audio_BZ_data`,
            token: `${process.env.BUZZSPROUT_TOKEN}`,
            podcastId: '1186835',
          },
        },
  ],
}
