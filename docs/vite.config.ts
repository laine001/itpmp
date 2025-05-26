import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

import basicSsl from '@vitejs/plugin-basic-ssl'
// import { MarkdownTransform } from './.vitepress/theme/libs/markdown-transform'

export default defineConfig(async () => {
  return <UserConfig>{
    plugins: [
      basicSsl({
        domains: ['localhost', 'itpmp.netlify.app']
      }),
      // MarkdownTransform()
    ],
    server:{
      https: {},
    }
  }
})
