
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-ts/'
    : '/',
  devServer: {
    //proxy: 'http://127.0.0.1:8080/static'
  },
}