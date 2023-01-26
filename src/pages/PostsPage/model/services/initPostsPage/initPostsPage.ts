import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getPostsPageHasInited } from '../../selectors/postsPageSelectors';
import { postsPageActions } from '../../slice/postsPageSlice';
import { fetchPosts } from '../fetchPosts/fetchPosts';
import { PostTags } from '@/entities/Post';

export const initPostsPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'initPostsPage',
    async ( searchParams, { dispatch, getState } ) => {
        const hasInited = getPostsPageHasInited( getState() );
        if ( !hasInited ) {
            const search = searchParams.get( 'search' ) || '';
            const sort = searchParams.get( 'sort' ) || 'date';
            const order = searchParams.get( 'order' ) || 'asc';
            const tag = searchParams.get( 'tag' ) || 'All';

            if ( search ) {
                dispatch( postsPageActions.setSearchQuery( search ) );
            }

            if ( sort && order ) {
                dispatch( postsPageActions.setFilters( `${ order }_${ sort }` ) );
            }

            if ( tag ) {
                dispatch( postsPageActions.setTag( tag as PostTags ) );
            }

            dispatch( postsPageActions.initState() );
            dispatch( fetchPosts( {} ) );
        }
    }
);
