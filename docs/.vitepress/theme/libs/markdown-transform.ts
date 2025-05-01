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
      // let code = codeTemp
      // convert links to relative
      // code = code.replace(/https?:\/\/chodocs\.cn\//g, '/')
      // const [_name, i] = id.split('/').slice(-2)

      // convert img
      // const imgRegex = /!\[(.+?)\]\((.+?)\)/g
      // let imgMatches = imgRegex.exec(code)
      // while (imgMatches) {
      //   const [text, link] = imgMatches.slice(1)
      //   code = code.replace(imgMatches[0], `<img src="${link}" alt="${text || 'img'}" />`)
      //   imgMatches = imgRegex.exec(code)
      // }

      // convert links to components
      // const linkRegex = /\[(.+?)\]\((.+?)\)/g
      // let matches = linkRegex.exec(code)
      // while (matches) {
      //   const [text, link] = matches.slice(1)
      //   code = code.replace(matches[0], `<CustomLink title="${text}" href="${link}" />`)
      //   matches = linkRegex.exec(code)
      // }
      // console.log(_name, id, '_name')
      // cut index.md
      // if (_name === 'docs' && i === 'index.md')
      //   return code

      // const { footer } = await getDocsMarkdown()
      // code = replacer(code, footer, 'FOOTER', 'tail')
      // const { readTime, words } = getReadingTime(code)
      // code = code.replace(/(^# .+?\n)/m, `$1\n\n12312312\n`)
      // console.log(code, 'codecodecode2')
      code = `${code}`.replace(/(#\s.+?\n\n)/, `$1\n\n1231哈哈2312\n`)
      const i = /(#\s.+?\n)/.test(code)
      // code = `${code}\n123123\n`
      console.log(code, i, 'codecodecode')
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
