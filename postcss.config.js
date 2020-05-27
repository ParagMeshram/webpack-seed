module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': {},
        //'autoprefixer': { browsers: ['last 2 versions', 'iOS >= 8'] }
        'autoprefixer': { 'browsers': ['> 1%', 'last 10 versions'] }
    }
}