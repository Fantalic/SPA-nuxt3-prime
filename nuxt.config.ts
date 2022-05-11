import { defineNuxtConfig } from 'nuxt'
import pkg from './package.json'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
    },
  },
  ssr: true,
  mode: 'spa',
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },
  vueuse: {
    ssrHandlers: false,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: false,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },
  colorMode: {
    classSuffix: '',
  },
  css: [
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],
  build: {
    transpile: ['primevue'],
  },

})
