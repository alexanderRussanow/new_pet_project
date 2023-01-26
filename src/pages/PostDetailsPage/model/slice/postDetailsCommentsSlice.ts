import { fetchCommentsByPostId } from '../services/fetchCommentsByPostId';
import { PostDetailsCommentSchema } from '../types/postDetailsPageTypes';
import { StateSchema } from '@/app/providers/StoreProvider';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType } from '@/entities/Comment';

const commentsAdapter = createEntityAdapter<CommentType>( {
    selectId: comment => comment.id,
} );

export const getPostComments = commentsAdapter.getSelectors<StateSchema>( state => state.postsDetails?.comments || commentsAdapter.getInitialState() );

const postDetailsCommentsSlice = createSlice( {
    name: 'postDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<PostDetailsCommentSchema>( {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    } ),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                fetchCommentsByPostId.pending,
                state => {
                    state.isLoading = true;
                    state.error = undefined;
                } 
            )
            .addCase(
                fetchCommentsByPostId.fulfilled,
                ( state, action: PayloadAction<CommentType[]> ) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(
                        state,
                        action.payload 
                    );
                } 
            )
            .addCase(
                fetchCommentsByPostId.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                } 
            );
    },
} );

export const { actions: postCommentsActions } = postDetailsCommentsSlice;
export const { reducer: postCommentsReducer } = postDetailsCommentsSlice;
