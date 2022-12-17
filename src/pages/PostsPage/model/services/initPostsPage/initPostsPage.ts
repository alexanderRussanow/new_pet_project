import { postsFiltersActions } from 'features/PostsFilters';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getPostsPageHasInited } from '../../selectors/postsPageSelectors';
import { postsPageActions } from '../../slice/postsPageSlice';
import { fetchPosts } from '../fetchPosts/fetchPosts';

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
                dispatch( postsFiltersActions.setSearchQuery( search ) );
            }

            if ( sort && order ) {
                dispatch( postsFiltersActions.setFilters( `${ order }_${ sort }` ) );
            }

            if ( tag ) {
                dispatch( postsFiltersActions.setTag( tag ) );
            }

            dispatch( postsPageActions.initState() );
            dispatch( fetchPosts( {} ) );
        }
    }
);
