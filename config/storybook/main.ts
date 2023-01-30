import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async ( config: Configuration ) => {
        const paths = {
            src: path.resolve(
                __dirname,
                '..',
                '..',
                'src' 
            ),
            build: '',
            entry: '',
            html: '',
            locales: '',
            buildLocales: '',
            media: '',
            buildMedia: '',
        };

        config.resolve!.modules = [
            paths.src,
            'node_modules'
        ];
        config.resolve!.extensions?.push(
            '.ts',
            '.tsx' 
        );

        const rules = config.module!.rules as RuleSetRule[];
        config.module!.rules = rules.map( rule => ( /svg/.test( rule.test as string ) ? { ...rule, exclude: /\.svg$/i } : rule ) );

        config.module?.rules?.push( {
            test: /\.svg$/,
            use: [
                '@svgr/webpack'
            ],
        } );

        config.module?.rules?.push( buildCssLoader( true ) );

        // config.resolve!.alias = {
        //     ...config.resolve?.alias,
        //     '@': paths.src,
        // };

        config.resolve!.plugins = [
            ...( config.resolve?.plugins || [] ),
            new TsconfigPathsPlugin( {
                extensions: config.resolve?.extensions,
            } ),
        ];

        config.plugins?.push( new DefinePlugin( {
            __IS_DEV__: JSON.stringify( true ),
            __API__: JSON.stringify( 'https://testapitest.cz' ),
            __PROJECT__: JSON.stringify( 'storybook' ),
        } ) );

        return config;
    },
};
