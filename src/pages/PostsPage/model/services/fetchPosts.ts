import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PostType } from 'entities/Post/model/types/PostType';

export const fetchPosts = createAsyncThunk<PostType[], void, ThunkConfig<string>>(
    'fetchPosts',
    async ( _, { rejectWithValue, extra } ) => {
        try {
            const response = await extra.api.get<PostType[]>(
                `/posts`,
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
            return rejectWithValue( 'Some problems with fetching posts...' );
        }
    } 
);
