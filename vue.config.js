const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://naturesgarden-default-rtdb.firebaseio.com/',
  }
})
