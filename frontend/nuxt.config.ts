// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/style/main.css'],
  app: {
    head: {
      title: 'FEEDO',
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }, // これを追記する
      ],
    }
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: "feedobackend.mtayo.net",
      pathRewrite: {'^/api/': ''}, 
      changeOrigin: true, 
    }
  },
  target: 'static',
  generate: {
    fallback: true,
  },
})
