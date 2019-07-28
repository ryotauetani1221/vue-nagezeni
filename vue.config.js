module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-nagezeni/docs/'
        : '/',
    outputDir: 'docs',
}