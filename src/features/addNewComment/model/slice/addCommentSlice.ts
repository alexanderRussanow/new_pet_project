import { AddNewCommentSchema } from './../types/AddNewCommentSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AddNewCommentSchema = {
    text: '',
    error: '',
};

export const addNewCommentSlice = createSlice( {
    name: 'addNewCommentSlice',
    initialState,
    reducers: {
        addText: ( state, action: PayloadAction<string> ) => {
            state.text = action.payload;
        },
    },
    //  extraReducers: builder => {
    //      builder
    //          .addCase(
    //              fetchProfileData.pending,
    //              state => {
    //                  state.isLoading = true;
    //                  state.error = undefined;
    //              }
    //          )
    //          .addCase(
    //              fetchProfileData.fulfilled,
    //              ( state, action: PayloadAction<ProfileType> ) => {
    //                  state.isLoading = false;
    //                  state.profileData = action.payload;
    //                  state.editableData = action.payload;
    //              }
    //          )
    //          .addCase(
    //              fetchProfileData.rejected,
    //              ( state, action ) => {
    //                  state.isLoading = false;
    //                  state.error = action.payload as string;
    //              }
    //          )
    //  },
} );

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
