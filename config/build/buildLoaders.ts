import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
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
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                    },

                },
            },
            'sass-loader',
        ],
    };
    return [svgLoader, babelLoader, fileLoader, tsLoader, cssLoader];
};
