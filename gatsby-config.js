module.exports = {
  siteMetadata: {
    title: `Bromel`,
    description: `Resolvemos toda burocracia envolvida no Mercado Financeiro e nos Meios
    de Pagamento para que você possa focar no que realmente importa, o seu
    dinheiro!`,
    author: `Bromel Intermediacoes de Negocios Eireli`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FF54AC`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["PT Serif"],
        },
        custom: {
          families: ["Inter"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
