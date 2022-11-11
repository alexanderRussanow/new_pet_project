import { buildCssLoader } from './../build/loaders/buildCssLoader';
import { BuildPaths } from './../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
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
    };
    config.resolve?.modules?.push( paths.src );
    config.resolve?.extensions?.push(
        '.ts',
        '.tsx' 
    );

    // const assetRule = config.module?.rules?.find( ( { test } ) => test.test( '.svg' ) );

    // const assetLoader = {
    //     loader: assetRule?.loader,
    //     options: assetRule?.options || assetRule?.query,
    // };

    // config.module?.rules?.unshift( {
    //     test: /\.svg$/,
    //     use: [
    //         '@svgr/webpack',
    //         assetLoader
    //     ],
    // } );

    // eslint-disable-next-line no-param-reassign, @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config.module?.rules = config.module.rules.map( ( rule: RuleSetRule ) => {
        if ( /svg/.test( rule.test as string ) ) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    } );

    config.module?.rules?.push( {
        test: /\.svg$/,
        use: [
            '@svgr/webpack'
        ],
    } );

    config.module?.rules?.push( buildCssLoader( true ) );
    return config;
};
