const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
                cache: true,
                sourceMap: true,
                terserOptions: {
                    chunkFilter: (chunk) => {

                        if (chunk.name === 'vendors') {
                            return false;
                        }

                        return true;
                    },
                }
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
});