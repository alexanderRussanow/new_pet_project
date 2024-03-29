import { fetchNextPostsPage } from '../../../PostsPage/model/services/fetchNextPostsPage/fetchNextPostsPage';
import { initPostsPage } from '../../../PostsPage/model/services/initPostsPage/initPostsPage';
import { postsPageReducer } from '../../../PostsPage/model/slice/postsPageSlice';
import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Page } from '@/widgets/Page';
import { PostInfiniteList } from '../PostInfiniteList/PostInfiniteList';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { PostsFilters } from '@/features/PostsFilters';

// styles
import classes from './PostsPage.module.scss';

export interface PostPageProps {
    className?: string;
}

const reducer: ReducersList = {
    postsPage: postsPageReducer,
};

const PostsPage: React.FC<PostPageProps> = ( { className } ) => {
    const [
        searchParams
    ] = useSearchParams();

    // redux hook
    const dispatch = useAppDispatch();

    const onLoadMore = useCallback(
        () => {
            dispatch( fetchNextPostsPage() );
        },
        [
            dispatch
        ] 
    );

    useInitialEffect( () => {
        dispatch( initPostsPage( searchParams ) );
    } );

    return (
        <DynamicReducerLoader
            reducers={ reducer }
            removeAfterUnmount={ false }>
            <Page
                data-testid='postsPage'
                className={ classNames(
                    classes.PostPage,
                    {},
                    [
                        className
                    ] 
                ) }
                onScrollEnd={ onLoadMore }>
                <Column
                    align='start'
                    gap='medium'>
                    <PostsFilters />
                    <PostInfiniteList />
                </Column>
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo( PostsPage );
