import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'entities/Profile';
import { Profile, ProfileSchema } from '../types/Profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    profileData: undefined,
};

export const profileSlice = createSlice( {
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                fetchProfileData.pending,
                state => {
                    state.isLoading = true;
                    state.error = undefined;
                } 
            )
            .addCase(
                fetchProfileData.fulfilled,
                ( state, action: PayloadAction<Profile> ) => {
                    state.isLoading = false;
                    state.profileData = action.payload;
                } 
            )
            .addCase(
                fetchProfileData.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                } 
            );
    },
} );

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
