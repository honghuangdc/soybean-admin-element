import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { setupVitePlugins } from './build';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;

  const rootPath = fileURLToPath(new URL('./', import.meta.url));
  const srcPath = `${rootPath}src`;

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: [
      ...setupVitePlugins(configEnv, srcPath, viteEnv),
      Components({
        extensions: ['vue'],
        dts: 'src/components.d.ts',
        resolvers: [ElementPlusResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/global.scss" as *;`
        }
      }
    },
    server: {
      host: true,
      port: 3333,
      open: true
    },
    build: {
      brotliSize: false
    }
  };
});
