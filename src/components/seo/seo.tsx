import React from 'react'
import { useSiteMeta } from './use-site-meta'

interface SeoProps extends Partial<Frontmatter> {
  title?: string
}

export const Seo = (frontmatter: SeoProps) => {
  const { site: { siteMetadata } } = useSiteMeta()

  return (
    <>
      <title>{`${siteMetadata.title} ${frontmatter?.title ?? 'Kamilo Dev'}`}</title>
      <meta name="author" content="Kamilo Vasquez | @killoblanco"/>
      <meta name="description" content={frontmatter?.description ?? siteMetadata.description} />
      {((frontmatter?.tags) != null) && <meta name="keywords" content={frontmatter.tags.join(', ')} />}
    </>
  )
}
