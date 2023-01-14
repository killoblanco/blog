interface Frontmatter {
  categories: string[]
  date: string
  description: string
  isDraft: boolean
  tags: string[]
  title: string
}

interface TimeToRead {
  minutes: number
  text: string
  time: number
  words: number
}

interface PostCardProps {
  id: string
  excerpt: string
  frontmatter: Frontmatter
  fields: {
    slug: string
    timeToRead: TimeToRead
  }
}

interface PostPageProps {
  allMdx: {
    nodes: PostCardProps[]
  }
}

interface PostPageContext {
  id: string
  frontmatter: Frontmatter
}
