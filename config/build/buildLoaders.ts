import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { BabelLoaderOptions } from './loaders/buildBabelLoader';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/,
        use: [
            '@svgr/webpack',
        ],
    };
    
    const codeBabelLoader = buildBabelLoader( { isDev, isTsx: false } as BabelLoaderOptions );
    const tsxBabelLoader = buildBabelLoader( { isDev, isTsx: true } as BabelLoaderOptions );

    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev)

    return [
        svgLoader,
        codeBabelLoader, 
        tsxBabelLoader, 
        fileLoader, 
        cssLoader
    ];
};