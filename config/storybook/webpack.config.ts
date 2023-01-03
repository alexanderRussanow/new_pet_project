import { buildCssLoader } from './../build/loaders/buildCssLoader';
import { BuildPaths } from './../build/types/config';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

export default ( { config }: { config: webpack.Configuration } ) => {
    const paths: BuildPaths = {
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
        buildLocales: ''
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
    config.plugins?.push( new DefinePlugin( {
        __IS_DEV__: JSON.stringify( true ),
        __API__: JSON.stringify( '' ),
        __PROJECT__: JSON.stringify( 'storybook' ),
    } ) );
    return config;
};
