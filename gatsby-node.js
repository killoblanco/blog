const slugify = require('@sindresorhus/slugify')
const readingTime = require('reading-time')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (['Mdx', 'Md'].includes(node.internal.type)) {
    createNodeField({
      node,
      name: 'slug',
      value: slugify(node.frontmatter.title)
    })
    createNodeField({
      node,
      name: 'timeToRead',
      value: readingTime(node.body)
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(({ node: { id, fields } }) => {
    actions.createPage({
      path: fields.slug,
      component: require.resolve('./src/pages/{mdx.fields__slug}.tsx'),
      context: {
        id
      }
    })
  })
}
