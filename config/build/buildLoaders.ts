import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/,
        use: [
            '@svgr/webpack',
        ],
    };
    
    const babelLoader = buildBabelLoader( {isDev} as BuildOptions );
    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: [ 
                { 
                    loader: 'ts-loader',
                    options: { transpileOnly: true }
                }
            ],
        exclude: /node_modules/,
    };
    const cssLoader = buildCssLoader(isDev)
    return [svgLoader, babelLoader, fileLoader, tsLoader, cssLoader];
};

 