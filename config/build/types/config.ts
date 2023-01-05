export type BuildMode = 'development' | 'production';

export interface BuildPaths {
   entry: string;
   html: string;
   build: string;
   src: string;
   locales: string;
   buildLocales: string;
   media: string;
   buildMedia: string;
}

export interface BuildEnv {
   mode: BuildMode;
   port: number;
   apiUrl: string;
}

export interface BuildOptions {
   mode: BuildMode;
   paths: BuildPaths;
   isDev: boolean;
   port: number;
   apiUrl: string;
   project: 'storybook' | 'jest' | 'app';
}
