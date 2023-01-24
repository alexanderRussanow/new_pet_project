import { RuleSetRule } from "webpack";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

export interface BabelLoaderOptions extends BuildOptions {
    isTsx?: boolean;
}

export const buildBabelLoader = ( { isDev, isTsx }: BabelLoaderOptions ): RuleSetRule => ( {
      test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env'],
              plugins: [
                //    [
                //       'i18next-extract',
                //       {
                //          locales: ['en', 'cz'],
                //          keyAsDefaultValue: true,
                //       }
                //    ],
                [
                    '@babel/plugin-transform-typescript'
                    ,
                    {
                        isTsx
                    }
                ],
                "@babel/plugin-transform-runtime",
                isTsx && [ 
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid']
                    }
                ],
                isDev && require.resolve('react-refresh/babel'),

          ].filter(Boolean),
          },
      },
});



