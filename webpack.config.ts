import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      html: path.resolve(__dirname, "public", "index.html"),
      build: path.resolve(__dirname, "build"),
    },
    isDev,
    port: PORT,
  })

 return config
};
