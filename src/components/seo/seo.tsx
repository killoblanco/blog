import React from 'react'
import { useSiteMeta } from './use-site-meta'

interface SeoProps {
  title?: string
}

export const Seo = ({ title }: SeoProps) => {
  const { site: { siteMetadata } } = useSiteMeta()

  return (
    <title>{`${siteMetadata.title} ${title ?? 'Kamilo Dev'}`}</title>
  )
}
