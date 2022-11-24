import { loginByUsername } from './../services/loginByUsername';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginSlice = createSlice( {
    name: 'login',
    initialState,
    reducers: {
        setUsername: ( state, action: PayloadAction<string> ) => {
            state.username = action.payload;
        },
        setPassword: ( state, action: PayloadAction<string> ) => {
            state.password = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(
                loginByUsername.pending,
                state => {
                    state.isLoading = true;
                    state.error = undefined;
                } 
            )
            .addCase(
                loginByUsername.fulfilled,
                ( state, action ) => {
                    state.isLoading = false;
                    state.username = action.payload.username;
                } 
            )
            .addCase(
                loginByUsername.rejected,
                ( state, action ) => {
                    state.isLoading = false;
                    state.error = action.payload as string;
                } 
            );
    },
} );

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
