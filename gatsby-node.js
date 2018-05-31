/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve(`src/templates/article.js`);
  const sectionTemplate = path.resolve("src/templates/section.js");

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 200)
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const sections = result.data.allMarkdownRemark.edges.reduce(
      (aggr, { node }) => {
        const section = /^\/p\/([^/?#]+)/.exec(node.frontmatter.path);
        aggr.add(section[1]);
        return aggr;
      },
      new Set()
    );

    /* for each section create a listing page */
    sections.forEach(section => {
      createPage({
        path: "/p/" + section,
        component: sectionTemplate,
        context: { section } // <-- we pass section as argument of the query
      });
    });

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}
      });
    });
  });
};
