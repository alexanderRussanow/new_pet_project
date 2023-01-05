import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv } from './config/build/types/config';

export default ( env: BuildEnv ) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    const paths = {
        entry: path.resolve(
            __dirname,
            'src',
            'index.tsx' 
        ),
        html: path.resolve(
            __dirname,
            'public',
            'index.html' 
        ),
        build: path.resolve(
            __dirname,
            'build' 
        ),
        src: path.resolve(
            __dirname,
            'src' 
        ),
        locales: path.resolve(
            __dirname,
            'public',
            'locales' 
        ),
        buildLocales: path.resolve(
            __dirname,
            'build',
            'locales' 
        ),
        media: path.resolve(
            __dirname,
            'public',
            'media'
        ),
        buildMedia: path.resolve(
            __dirname,
            'build',
            'media'
        ),
    };

    const config: webpack.Configuration = buildWebpackConfig( {
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'app',
    } );

    return config;
};
