import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PostType } from 'entities/Post/model/types/PostType';

export const fetchPostRecommendations = createAsyncThunk<PostType[], void, ThunkConfig<string>>(
    'fetchPostRecommendations',
    async ( _, { rejectWithValue, extra } ) => {
        try {
            const response = await extra.api.get<PostType[]>(
                `/posts`,
                {
                    params: {
                        _limit: 4,
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
