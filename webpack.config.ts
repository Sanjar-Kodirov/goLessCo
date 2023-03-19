import  HtmlWebpackPlugin  from 'html-webpack-plugin'
import path from 'path';
import webpack from 'webpack';
import { ProgressPlugin } from 'webpack';



const config: webpack.Configuration =  {
    // production mode or development
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js", // content has for making new hashed element
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    module: {
        // rules extention for files  like png, jpg, tsx, ts, etc.
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // for using index.html as template
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new ProgressPlugin()
    ],

};



export default config