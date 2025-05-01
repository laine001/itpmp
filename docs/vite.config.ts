import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
// import { MarkdownTransform } from './.vitepress/theme/libs/markdown-transform'

export default defineConfig(async () => {
  return <UserConfig>{
    plugins: [
      // MarkdownTransform()
    ]
  }
})
