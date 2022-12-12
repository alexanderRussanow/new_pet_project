import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { getPostData } from 'entities/Post/model/selectors/postSelectors';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByPostId } from 'pages/PostDetailPage/model/services/fetchCommentsByPostId';

export const addCommentForPost = createAsyncThunk<CommentType, string, ThunkConfig<string>>(
    'addCommentForPost',
    async ( text, { rejectWithValue, getState, dispatch, extra } ) => {
        const userId = getUserAuthData( getState() )?.id;
        const postId = getPostData( getState() )?.id;

        if ( !userId || !text || !postId ) {
            return rejectWithValue( 'No data' );
        }

        try {
            const response = await extra.api.post<CommentType>(
                '/comments',
                {
                    postId,
                    userId,
                    text,
                } 
            );

            if ( !response.data ) {
                throw new Error( 'No data' );
            }

            dispatch( fetchCommentsByPostId( postId ) );

            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Some problems occurred' );
        }
    }
);
