interface Frontmatter {
  categories: string[]
  date: string
  description: string
  isDraft: boolean
  slug: string
  tags: string[]
  title: string
}

interface PostCardProps {
  id: string
  excerpt: string
  frontmatter: Frontmatter
}
