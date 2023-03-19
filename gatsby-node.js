/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  const { setWebpackConfig } = actions;
  setWebpackConfig({
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    },
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        fs: false,
      }
    }
  })
}

const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve('src/templates/project-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlog (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: projectTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
