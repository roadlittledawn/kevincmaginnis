module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    title: `Kevin C Maginnis`,
    titleTemplate: "Kevin C Maginnis | %s",
    siteUrl: `https://aesthetic-bienenstitch-01eb0a.netlify.app`,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-56606559-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "artworkSlides",
        path: `${__dirname}/src/artwork-slides/`,
      },
      __key: "artwork-slides-yaml",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "artworkImages",
        path: `${__dirname}/src/artwork-images/`,
      },
      __key: "artwork-images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
  ],
};
