import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getPostsPageHasInited } from '../../selectors/postsPageSelectors';
import { postsPageActions } from '../../slice/postsPageSlice';
import { fetchPosts } from '../fetchPosts/fetchPosts';

export const initPostsPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'initPostsPage',
    async ( _, { dispatch, getState } ) => {
        const hasInited = getPostsPageHasInited( getState() );
        if ( !hasInited ) {
            dispatch( postsPageActions.initState() );
            dispatch( fetchPosts( {
                page: 1,
            } ) );
        }
    } 
);
