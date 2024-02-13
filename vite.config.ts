import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false
  },
  plugins: [
    vue({
      include: [/\.vue$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag:any) => {
            return tag.startsWith('iam-') // (return true)
          }
        }
      }
    })
  ],
})

