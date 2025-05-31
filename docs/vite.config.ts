import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
// import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import basicSsl from '@vitejs/plugin-basic-ssl'
import { MarkdownTransform } from './.vitepress/theme/libs/markdown-transform'

export default defineConfig(async () => {
  return <UserConfig>{
    plugins: [
      basicSsl({
        domains: ['localhost', 'itpmp.netlify.app']
      }),
      Components({
        dirs: ['./.vitepress/theme/components'],
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        // dts: 'docs/.vitepress/theme/components.d.ts',
        // resolvers: [NaiveUiResolver()],
      }),
      MarkdownTransform()
    ],
    server:{
      https: {},
    }
  }
})
