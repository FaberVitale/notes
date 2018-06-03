module.exports = {
  pathPrefix: "/notes",
  siteMetadata: {
    title: "Notes"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/`,
        name: "markdown-pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                js: "javascript"
              }
            }
          }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Notes",
        short_name: "Notes",
        start_url: "./",
        background_color: "#ffffff",
        theme_color: "#03A9F4",
        display: "standalone",
        icon: "src/images/icons/favicon512.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
