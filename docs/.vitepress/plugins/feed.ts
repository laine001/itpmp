import path from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed } from 'feed'
import { type SiteConfig, createContentLoader } from 'vitepress'
import {
  host_name as baseUrl,
  description, 
  name,
  github_link,
  sit_icon as favicon,
  sit_logo as image
} from '../config/meta'


export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: name,
    description,
    id: baseUrl,
    link: baseUrl,
    language: 'zh-CN',
    image,
    favicon,
    copyright:
      'Copyright (c) 2023-present, laine001. All rights reserved.',
  })

  const posts = await createContentLoader('**/*.md', {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter?.date as string)
      - +new Date(a.frontmatter?.date as string),
  )

  for (const { url, frontmatter, html } of posts) {
    let postTitle = '无题'
    postTitle = html?.match(/<h1 id=(.*)>(.*?)<a .*?>/)?.[2] || postTitle
    feed.addItem({
      title: frontmatter?.title || postTitle,
      id: `${baseUrl}${url.slice(1)}`,
      link: `${baseUrl}${url.slice(1)}`,
      guid: `${baseUrl}${url.slice(1)}`,
      description: html,
      content: html,
      author: [
        {
          name: frontmatter?.author || 'Laine',
          link: frontmatter?.author
            ? github_link
            : undefined,
        },
      ],
      date: frontmatter?.date || new Date('2021-07-01'),
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}
