const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://naturesgarden-default-rtdb.firebaseio.com/',
    proxy: 'https://admirable-mandazi-44a0f9.netlify.app',
  }
})
