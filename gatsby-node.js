/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const get = require(`lodash/get`);
const path = require(`path`);

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Wordpress__PAGEAcfPage_banner: {
      image_alt: { type: `String` },
      title: { type: `String` },
      subtitle: { type: `String` },
      anchor_text: { type: `String` },
      anchor_href: { type: `String` },
      anchor_title: { type: `String` },
    },
    Wordpress__PAGEAcfIntro: {
      title: { type: `String` },
      content: { type: `String` },
    },
    Wordpress__PAGEAcfThe_problem: {
      title: { type: `String` },
      content: { type: `String` },
    },
    Wordpress__PAGEAcfThe_solution: {
      title: { type: `String` },
      content: { type: `String` },
    },
  });
};

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
        allWordpressPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
      .then(({ data }) => {
        const categories = get(data, `allWordpressCategory.edges`, []).map(({ node }) => ({
          name: node.name,
          slug: node.slug,
          description: node.description,
        }));
        categories.forEach(({ name, slug, description }) => {
          createPage({
            path: `/categories/${slug}`,
            component: path.resolve(`./src/templates/Category.template.jsx`),
            context: {
              categorySlug: slug,
              categoryName: name,
              categoryDescription: description,
              categories,
            },
          });
        });

        const posts = get(data, `allWordpressPost.edges`, []).map(({ node: { id, slug } }) => ({
          id,
          slug,
        }));

        posts.forEach(({ id, slug }) => {
          createPage({
            path: `/blog/${slug}`,
            component: path.resolve(`./src/templates/SinglePost.template.jsx`),
            context: { id },
          });
        });

        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};
