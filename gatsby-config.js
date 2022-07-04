/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-root-import",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", //Needed for Dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
      {
        name: "ItchIo",
        href: "",
        icon: "ItchIo",
      },
    ],
    skills: [
      {
        icon: "CPlusPlus",
        title: "C++",
      },
      {
        icon: "CSharp",
        title: "C#",
      },
      {
        icon: "Unity",
        title: "Unity",
      },
      {
        icon: "OpenGL",
        title: "OpenGL",
      },
      {
        icon: "HTML",
        title: "HTML",
      },
      {
        icon: "CSS",
        title: "CSS",
      },
      {
        icon: "JavaScript",
        title: "JavaScript",
      },
      {
        icon: "TypeScript",
        title: "TypeScript",
      },
      {
        icon: "React",
        title: "React",
      },
      {
        icon: "Git",
        title: "Git",
      },
      {
        icon: "WordPress",
        title: "WordPress",
      },
      {
        icon: "Python",
        title: "Python",
      },
      {
        icon: "VisualStudio",
        title: "Visual Studio",
      },
      {
        icon: "VSCode",
        title: "VS Code",
      },
      {
        icon: "MSSQL",
        title: "Microsoft SQL",
      },
    ],
  },
};
