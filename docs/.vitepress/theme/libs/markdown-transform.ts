import type { Plugin } from 'vite'
// import { replacer } from '../../../scripts/utils'
import { getReadingTime } from './utils'

export function replacer(code: string, value: string, key: string, insert: 'head' | 'tail' | 'none' = 'none') {
  const START = `<!--${key}_STARTS-->`
  const END = `<!--${key}_ENDS-->`
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im')

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`

  if (!code.match(regex)) {
    if (insert === 'none')
      return code
    else if (insert === 'head')
      return `${target}\n\n${code}`
    else
      return `${code}\n\n${target}`
  }

  return code.replace(regex, target)
}

export function MarkdownTransform(): Plugin {
  return {
    name: 'transform-md',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null
      // cut index.md
      // if (_name === 'docs' && i === 'index.md')
      //   return code
      // const { footer } = await getDocsMarkdown()
      const { readTime, words } = getReadingTime(code)
      console.log(readTime, words, 'readTime')
      code = `${code}`
        .replace(/(#\s.+?\r?\n\r?\n)/, `$1\n\n<PostInfo readTime="${readTime}" words="${words}" />\n`)
      return code
    },
  }
}

export async function getDocsMarkdown() {
  const ContributorsSection = `## Contributors
  123123`

  const CopyRightSection = `
  456456`

  const footer = `${ContributorsSection}\n${CopyRightSection}\n`

  return {
    footer,
  }
}
