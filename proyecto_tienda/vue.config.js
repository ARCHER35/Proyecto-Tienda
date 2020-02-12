module.exports = {
    publicPath: '.',
    // baseUrl: '.',
    assetsDir: './assets',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
      proxy: {
        '/*': {
          target: 'mongodb+srv://frial-criss:frialcriss@cluster0-e5eku.mongodb.net/test',
          ws: false,
          changeOrigin: true,
        },
      },
    },
  };