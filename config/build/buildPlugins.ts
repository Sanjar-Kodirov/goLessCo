
import { ProgressPlugin } from 'webpack';
import  HtmlWebpackPlugin  from 'html-webpack-plugin'
import webpack from 'webpack'
import {BuildOptions} from  './types/config'
export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            // for using index.html as template
            template: paths.html
        }),
        new ProgressPlugin()
]
}