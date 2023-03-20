
import path from 'path';
import webpack from 'webpack'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {mode, paths} = options
    return  {
    // production mode or development
    mode: mode,
    entry:  paths.entry,
    output: {
        filename: "[name].[contenthash].js", // content has for making new hashed element
        path: paths.build,
        clean: true
    },
    module: {
        // rules extention for files  like png, jpg, tsx, ts, etc.
        rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options)
};
}