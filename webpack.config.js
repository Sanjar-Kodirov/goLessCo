const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const { ProgressPlugin } = require('webpack');

module.exports = {
    // production mode or development
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: "[name].[contenthash].js", // content has for making new hashed element
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // for using index.html as template
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new ProgressPlugin()
    ],

};