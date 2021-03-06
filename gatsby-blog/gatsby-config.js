module.exports = {
  siteMetadata: {
    title: "personal-site",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "\u0018",
      },
    },    
    "gatsby-plugin-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-source-strapi`,
      options: {        
        // apiURL: process.env.DEPLOY_URL
        apiURL: process.env.NODE_ENV
          ? "https://radiant-badlands-82914.herokuapp.com"
          : `http://localhost:1337`,
        contentTypes: [`blog`, `categorical`, `project`, `about`],
        queryLimit: 1000,
      },  
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
