import type { HeadConfig } from 'vitepress'

export function generateSEOHead(
  title: string,
  description: string,
  url: string,
  image?: string
): HeadConfig[] {
  const siteUrl = 'https://itpmp.netlify.app'
  const fullUrl = `${siteUrl}${url}`
  const ogImage = image || `${siteUrl}/images/site/og-image.png`
  
  return [
    // 基础 SEO
    ['meta', { name: 'description', content: description }],
    ['meta', { name: 'keywords', content: '信息系统项目管理师,软考,高级信息系统项目管理,项目管理,ITPM,ITPMP' }],
    
    // Open Graph
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: fullUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:site_name', content: '信息系统项目管理师' }],
    
    // Twitter Cards
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    
    // 结构化数据
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': title,
      'description': description,
      'url': fullUrl,
      'image': ogImage,
      'author': {
        '@type': 'Person',
        'name': 'laine001'
      },
      'publisher': {
        '@type': 'Organization',
        'name': '信息系统项目管理师',
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteUrl}/images/site/logo.svg`
        }
      },
      'datePublished': new Date().toISOString(),
      'dateModified': new Date().toISOString()
    })]
  ]
}

export function transformPageData(pageData: any) {
  // 为每个页面生成更好的标题和描述
  if (pageData.frontmatter) {
    if (!pageData.frontmatter.title && pageData.title) {
      pageData.frontmatter.title = `${pageData.title} - 信息系统项目管理师`
    }
    
    if (!pageData.frontmatter.description && pageData.description) {
      pageData.frontmatter.description = pageData.description
    }
  }
  
  return pageData
}