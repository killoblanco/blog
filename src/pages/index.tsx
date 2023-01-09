import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Typography } from '@mui/material'

const docLinks = [
  {
    text: 'TypeScript Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
    color: '#8954A8'
  },
  {
    text: 'GraphQL Typegen Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/',
    color: '#8954A8'
  }
]

const links = [
  {
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/',
    description:
      'A great place to get started if you\'re new to web development. Designed to guide you through setting up your first Gatsby site.',
    color: '#E95800'
  },
  {
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
    description:
      'Practical step-by-step guides to help you achieve a specific goal. Most useful when you\'re trying to get something done.',
    color: '#1099A8'
  },
  {
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
    description:
      'Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby\'s APIs.',
    color: '#BC027F'
  },
  {
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    color: '#0D96F2'
  },
  {
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    color: '#8EB814'
  },
  {
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
    badge: true,
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    color: '#663399'
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Typography variant="h1">
        Sample
      </Typography>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <p>
        Edit <code>src/pages/index.tsx</code> to see this page
        update in real-time. 😎
      </p>
      <ul>
        {docLinks.map(doc => (
          <li key={doc.url}>
            <a
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <span>
              <a
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
              {link.text}
              </a>
              {(link.badge === true) && (
                <span aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
