import { PostList } from 'entities/Post';
import { PostsFilters, postsFiltersReducer } from 'features/PostsFilters';
import { getPostsPageIsLoading, getPostsPageViewMode } from 'pages/PostsPage/model/selectors/postsPageSelectors';
import { fetchNextPostsPage } from 'pages/PostsPage/model/services/fetchNextPostsPage/fetchNextPostsPage';
import { initPostsPage } from 'pages/PostsPage/model/services/initPostsPage/initPostsPage';
import { getPostsPagePosts, postsPageReducer } from 'pages/PostsPage/model/slice/postsPageSlice';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Column } from 'shared/ui/Layout';
import { Page } from 'widgets/Page';

// styles
import classes from './PostsPage.module.scss';

export interface PostPageProps {
    className?: string;
}

const reducer: ReducersList = {
    postsPage: postsPageReducer,
    postsFilters: postsFiltersReducer,
};

const PostsPage: React.FC<PostPageProps> = ( { className } ) => {
    // redux hooks
    const dispatch = useAppDispatch();
    const postsList = useSelector( getPostsPagePosts.selectAll );
    const isLoading = useSelector( getPostsPageIsLoading );
    const viewMode = useSelector( getPostsPageViewMode );
    const [
        searchParams
    ] = useSearchParams();

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
                    gap='medium'
                >
                    <PostsFilters />
                    <PostList
                        isLoading={ isLoading }
                        posts={ postsList }
                        viewMode={ viewMode } />
                </Column>
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo( PostsPage );
