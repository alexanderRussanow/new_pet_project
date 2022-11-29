import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPostById } from '../services/fetchPostById';
import { PostSchema, PostType } from '../types/PostType';

const initialState: PostSchema = {
    isLoading: false,
    error: undefined,
    postData: undefined,
};

export const postSlice = createSlice( {
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                fetchPostById.pending,
                state => {
                    state.isLoading = true;
                    state.error = undefined;
                } 
            )
            .addCase(
                fetchPostById.fulfilled,
                ( state, action: PayloadAction<PostType> ) => {
                    state.isLoading = false;
                    state.postData = action.payload;
                } 
            )
            .addCase(
                fetchPostById.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                } 
            );
    },
} );

export const { actions: postActions } = postSlice;
export const { reducer: postReducer } = postSlice;
