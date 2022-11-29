import { lazy } from 'react';

export const BlogPageLazy = lazy( () => import( './Blog' ) );
