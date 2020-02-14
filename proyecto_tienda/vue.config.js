module.exports = {
    publicPath: '.',
    // baseUrl: '.',
    assetsDir: './assets',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
      proxy: {
        '/*': {
          target: '',
          ws: false,
          changeOrigin: true,
        },
      },
    },
  };