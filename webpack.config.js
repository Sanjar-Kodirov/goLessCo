const path = require('path');

module.exports = {
    // production mode or development
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: "[name].[contenthash].js", // content has for making new hashed element
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
};