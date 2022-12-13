import { PostList, PostListViewModeEnum, PostViewSwitcher } from 'entities/Post';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Page } from 'shared/ui/Page';
import { getPostsPageIsLoading, getPostsPageViewMode } from '../model/selectors/postsPageSelectors';
import { fetchNextPostsPage } from '../model/services/fetchNextPostsPage/fetchNextPostsPage';
import { fetchPosts } from '../model/services/fetchPosts/fetchPosts';
import { getPostsPagePosts, postsPageActions, postsPageReducer } from '../model/slice/postsPageSlice';
// styles
import classes from './PostsPage.module.scss';

export interface PostPageProps {
    className?: string;
}

const reducer: ReducersList = {
    postsPage: postsPageReducer,
};

const PostsPage: React.FC<PostPageProps> = ( { className } ) => {
    // redux hooks
    const dispatch = useAppDispatch();
    const postsList = useSelector( getPostsPagePosts.selectAll );
    const isLoading = useSelector( getPostsPageIsLoading );
    const viewMode = useSelector( getPostsPageViewMode );

    const viewModeToggle = useCallback(
        ( view: PostListViewModeEnum ) => {
            dispatch( postsPageActions.setViewMode( view ) );
        },
        [
            dispatch
        ]
    );

    const onLoadMore = useCallback(
        () => {
            dispatch( fetchNextPostsPage() );
        },
        [
            dispatch
        ] 
    );

    useInitialEffect( () => {
        dispatch( postsPageActions.initState );
        dispatch( fetchPosts( {
            page: 1,
        } ) );
    } );

    return (
        <DynamicReducerLoader reducers={ reducer }>
            <Page
                className={ classNames(
                    classes.PostPage,
                    {},
                    [
                        className
                    ] 
                ) }
                onScrollEnd={ onLoadMore }>
                <PostViewSwitcher
                    className={ classes.viewToggle }
                    viewMode={ viewMode as PostListViewModeEnum }
                    onViewModeChange={ viewModeToggle } />
                <PostList
                    isLoading={ isLoading }
                    posts={ postsList }
                    viewMode={ viewMode } />
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo( PostsPage );
