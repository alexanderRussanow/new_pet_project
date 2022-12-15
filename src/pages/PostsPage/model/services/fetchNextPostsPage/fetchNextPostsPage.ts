import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getPostsPageHasMore, getPostsPagePage, getPostsPageIsLoading } from '../../selectors/postsPageSelectors';
import { postsPageActions } from '../../slice/postsPageSlice';
import { fetchPosts } from '../fetchPosts/fetchPosts';

export const fetchNextPostsPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'fetchNextPostsPage',
    async ( _, { dispatch, getState } ) => {
        const hasMore = getPostsPageHasMore( getState() );
        const page = getPostsPagePage( getState() );
        const isLoading = getPostsPageIsLoading( getState() );

        if ( hasMore && !isLoading ) {
            dispatch( postsPageActions.setPageNumber( Number( page ) + 1 ) );
            dispatch( fetchPosts( {} ) );
        }
    } 
);
