import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/,
        use: [
            '@svgr/webpack',
        ],
    };
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            // 'plugins': [
            //    [
            //       'i18next-extract',
            //       {
            //          locales: ['en', 'cz'],
            //          keyAsDefaultValue: true,
            //       }
            //    ]
            // ]
            },
        },
    };
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
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const cssLoader = buildCssLoader(isDev)
    return [svgLoader, babelLoader, fileLoader, tsLoader, cssLoader];
};
