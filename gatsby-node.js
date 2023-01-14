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
