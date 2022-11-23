import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/User';
import { USER_LS_KEY } from 'shared/const/localStorage/localStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        setAuthUser: ( state, action: PayloadAction<User> ) => {
            state.authData = action.payload;
        },
        initUserData: state => {
            const userData = localStorage.getItem( USER_LS_KEY );
            if ( userData ) {
                state.authData = JSON.parse( userData );
            }
        },
        logout: state => {
            localStorage.removeItem( USER_LS_KEY );
            state.authData = undefined;
        },
    },
} );

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
