import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PostType } from '../types/PostType';

export const fetchPostById = createAsyncThunk<PostType, string, ThunkConfig<string>>(
    'fetchPostById',
    async ( postId, { rejectWithValue, extra } ) => {
        try {
            const response = await extra.api.get<PostType>( `/posts/${ postId }` );
            if ( !response.data ) {
                throw new Error( 'No data' );
            }
            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Wrong post ID!' );
        }
    } 
);
