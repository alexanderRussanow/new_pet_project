import { Skeleton } from '@/shared/ui/Skeleton';
import { lazy, Suspense } from 'react';
import { PostRatingProps } from './PostRating';

const PostRatingAsync = lazy( () => import( './PostRating' ) );

export const PostRatingLazy = ( props: PostRatingProps ) => (
    <Suspense
        fallback={ <Skeleton
            height={ '150px' }
            width={ '100%' } /> }>
        <PostRatingAsync { ...props } />
    </Suspense>
);
