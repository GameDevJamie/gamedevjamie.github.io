/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-root-import",
  ],
  siteMetadata: {
    title: "Jamie Tumalty",
    social: [
      {
        name: "Twitter",
        href: "",
        icon: "Twitter",
      },
      {
        name: "Github",
        href: "",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        href: "",
        icon: "LinkedIn",
      },
      //{
      //  name: "ItchIo",
      //  href: "",
      //  icon: "ItchIo",
      //},
    ],
  },
}
