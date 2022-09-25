import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./webpack/build/buildWebpackConfig";
import { BuildEnv } from "./webpack/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "build"),
  }

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

 return config
};
