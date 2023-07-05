// https://medium.com/js-dojo/how-to-reduce-your-vue-js-bundle-size-with-webpack-3145bf5019b7
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const PACKAGE = require('./package.json');
const {defineConfig} = require('@vue/cli-service')

const banner = PACKAGE.name + ' - ' + PACKAGE.version + ' | ' +
    '(c) 2015, ' + new Date().getFullYear() + '  ' + PACKAGE.author + ' | ' +
    PACKAGE.homepage;

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        output: {
            library: "VueGridLayout",
            libraryExport: 'default'
        },
        plugins: [
            // new BundleAnalyzerPlugin(),
            new webpack.BannerPlugin(banner)
        ],
    },
    css: {
        extract: false
    },
    // When lintOnSave is a truthy value, eslint-loader will be applied in both development and production,
    // then lint is before terser, 
    // so even configure babel plugin "transform-remove-console", it still fails to build because of eslint rule
    lintOnSave: process.env.NODE_ENV !== 'production'
})
