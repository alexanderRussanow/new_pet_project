import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
   const { mode, paths, isDev } = options;
   const config = {
         mode: mode,
         entry: paths.entry,
         output: {
           path: paths.build,
           filename: "[name].[contenthash].js",
           clean: true,
         },
         module: {
           rules: buildLoaders(options)
         },
         resolve: buildResolvers(options),
         plugins: buildPlugins(paths),
         devtool: isDev ? 'inline-source-map' : undefined,
         devServer: isDev ? buildDevServer(options) : undefined,
      }
  return config;
} 