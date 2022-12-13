import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PostType } from 'entities/Post/model/types/PostType';
import { getPostsPageLimit } from '../../selectors/postsPageSelectors';

export interface FetchPostsProps {
    page?: number;
}

export const fetchPosts = createAsyncThunk<PostType[], FetchPostsProps, ThunkConfig<string>>(
    'fetchPosts',
    async ( props, { rejectWithValue, extra, getState } ) => {
        const { page } = props;
        const limit = getPostsPageLimit( getState() );

        try {
            const response = await extra.api.get<PostType[]>(
                `/posts`,
                {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                    },
                } 
            );

            if ( !response.data ) {
                throw new Error( 'No data' );
            }
            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Some problems with fetching posts...' );
        }
    }
);
