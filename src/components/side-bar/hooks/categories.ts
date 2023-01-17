import { graphql, useStaticQuery } from 'gatsby'

interface PostCategoriesQuery {
  allMdx: {
    nodes: Array<{
      frontmatter: {
        categories: string[]
      }
    }>
  }
}

export const usePostsCategories = (): string[] => {
  const { allMdx: { nodes } } = useStaticQuery<PostCategoriesQuery>(
    graphql`
      query MyQuery {
        allMdx {
          nodes {
            frontmatter {
              categories
            }
          }
        }
      }
    `
  )

  console.log({ nodes })

  const excludedCategories = ['Django', 'Apache', 'PHP', 'Symfony']
  const nextCategories = new Set<string>()

  nodes.forEach(({ frontmatter: { categories } }) => {
    (categories ?? []).forEach(category => {
      if (!excludedCategories.includes(category)) {
        nextCategories.add(category)
      }
    })
  })

  return Array.from(nextCategories)
}
