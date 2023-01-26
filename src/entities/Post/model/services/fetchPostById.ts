import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { PostType } from '../types/PostType';

export const fetchPostById = createAsyncThunk<PostType, string | undefined, ThunkConfig<string>>(
    'fetchPostById',
    async ( postId, { rejectWithValue, extra } ) => {
        try {
            if ( !postId ) {
                throw new Error( 'No post ID!' );
            }
            const response = await extra.api.get<PostType>(
                `/posts/${ postId }`,
                {
                    params: {
                        _expand: 'user',
                    },
                } 
            );
            if ( !response.data ) {
                throw new Error( 'No data' );
            }
            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Wrong post ID!' );
        }
    }
);
