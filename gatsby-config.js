module.exports = {
  pathPrefix: "/leonids",
  siteMetadata: {
    title: `Amymeme`,
    author: {
      name: `@AMYMEME`,
      summary: ``,
    },
    description: `A simple, fixed sidebar two columns Gatsby.js blog starter.`,
    siteUrl: `https://renyuanz.github.io/leonids`,
    social: {
      twitter: "",
      gmail: "cgc8016@ewhain.net",
      linkedIn: "seulgi-choi-b8623519b",
      github: "AMYMEME",
      kakaoTalk: "ovoamy"
    },
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve:`gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
              showLineNumbers: true,
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-62251910-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `icon`,
        short_name: `icon`,
        start_url: `/`,
        display: `standalone`,
        icon: `content/assets/fire.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-smoothscroll`
  ],
}
