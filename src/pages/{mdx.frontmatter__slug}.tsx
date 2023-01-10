import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

const PostPage: React.FC<PageProps> = ({ children }) => (
  <>
    {children}
  </>
)

export const Head: HeadFC = () => <title />

export default PostPage
