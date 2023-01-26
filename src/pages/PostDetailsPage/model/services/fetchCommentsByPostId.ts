import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { CommentType } from '@/entities/Comment';

export const fetchCommentsByPostId = createAsyncThunk<CommentType[], string | undefined, ThunkConfig<string>>(
    'fetchCommentsByPostId',
    async ( postId, { rejectWithValue, extra } ) => {
        try {
            if ( !postId ) {
                return rejectWithValue( 'No post ID!' );
            }
            const response = await extra.api.get<CommentType[]>(
                `/comments/`,
                {
                    params: {
                        postId,
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
