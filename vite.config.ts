/*
 * @Author: Yongon
 * @LastEditors: yanglei m.justin.yang@outlook.com
 * @Description: file content
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import { viteVConsole } from 'vite-plugin-vconsole';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);

  return {
    plugins: [
      vue(),
      vueJsx({}),
      Components({
        resolvers: [VantResolver()]
      }),
      viteVConsole({
        entry: resolve('src/main.ts'), // 入口文件，或者可以使用这个配置: [path.resolve('src/main.js')]
        localEnabled: true, // 本地是否启用
        // enabled: loadEnv.VITE_BUILD_VCONSOLE === 'true', // 是否启用
        config: {
          maxLogNumber: 1000,
          theme: 'dark' // 主题颜色 'dark'|'light'
        }
      })
    ],
    chainWebpack: (config) => {
      config.plugin('html').tap((args) => {
        args[0].title = '中油车队卡';
        return args;
      });
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        Views: resolve(__dirname, 'src/views'),
        Components: resolve(__dirname, 'src/components'),
        Utils: resolve(__dirname, 'src/Utils'),
        Api: resolve(__dirname, 'src/api'),
        Asseets: resolve(__dirname, 'src/assets'),
        Styles: resolve(__dirname, 'src/assets/Styles')
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          javascriptEnabled: true,
          additionalData: `@import '@/assets/scss/variable.scss';`
        }
      }
    },
    base: env.VITE_BASE_URL, // 设置打包路径
    server: {
      // https: false, // 是否开启 https
      port: 8888, // 设置服务启动端口号
      host: true, // 监听所有地址
      open: true, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      // 设置代理，根据我们项目实际情况配置
      proxy: {
        '/Api': {
          // 跟axios中的baseUrl相关联
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace('/Api/', '')
        }
      }
    }
  };
});
