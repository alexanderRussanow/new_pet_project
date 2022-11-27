import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData, updateProfileData } from 'entities/Profile';
import { ProfileType, ProfileSchema } from '../types/ProfileTypes';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    profileData: undefined,
    editableData: undefined,
};

export const profileSlice = createSlice( {
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: ( state, action: PayloadAction<boolean> ) => {
            state.readonly = action.payload;
        },
        editProfileData: ( state, action: PayloadAction<ProfileType> ) => {
            state.editableData = action.payload;
        },
        cancelEditProfileData: state => {
            state.editableData = state.profileData;
            state.readonly = true;
            state.validationErrors = undefined;
        },
    },
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
                ( state, action: PayloadAction<ProfileType> ) => {
                    state.isLoading = false;
                    state.profileData = action.payload;
                    state.editableData = action.payload;
                } 
            )
            .addCase(
                fetchProfileData.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                } 
            )
            .addCase(
                updateProfileData.pending,
                state => {
                    state.isLoading = true;
                    state.error = undefined;
                    state.validationErrors = undefined;
                } 
            )
            .addCase(
                updateProfileData.fulfilled,
                ( state, action: PayloadAction<ProfileType> ) => {
                    state.isLoading = false;
                    state.profileData = action.payload;
                    state.editableData = action.payload;
                    state.readonly = true;
                    state.validationErrors = undefined;
                } 
            )
            .addCase(
                updateProfileData.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.validationErrors = action.payload;
                } 
            );
    },
} );

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
