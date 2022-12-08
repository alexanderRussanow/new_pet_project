import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { getPostData } from 'entities/Post/model/selectors/postSelectors';
import { userAuthData } from 'entities/User';
import { addNewCommentActions, getCommentTextSelector } from 'features/addNewComment';

export const sendComment = createAsyncThunk<CommentType, void, ThunkConfig<string>>(
    'sendComment',
    async ( _, { rejectWithValue, getState, dispatch, extra } ) => {
        const userId = userAuthData( getState() )?.id;
        const text = getCommentTextSelector( getState() );
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

            dispatch( addNewCommentActions.addText( '' ) );

            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Some problems occurred' );
        }
    }
);
