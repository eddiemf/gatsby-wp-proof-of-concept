/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const get = require(`lodash/get`);
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressCategory(filter: { slug: { ne: "uncategorized" } }) {
          edges {
            node {
              name
              slug
              description
            }
          }
        }
      }
    `)
      .then(({ data }) => {
        const categories = get(data, `allWordpressCategory.edges`, []).map(({ node }) => ({
          name: node.name,
          slug: node.slug,
        }));
        categories.forEach(({ node: category }) => {
          createPage({
            path: `/categories/${category.slug}`,
            component: path.resolve(`./src/templates/Category.jsx`),
            context: {
              categorySlug: category.slug,
              categoryName: category.name,
              categoryDescription: category.description,
              categories,
            },
          });
        });

        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};
