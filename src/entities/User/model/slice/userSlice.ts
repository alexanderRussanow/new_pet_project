import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/User';
import { USER_LS_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = {
    isInited: false,
};

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
            state.isInited = true;
        },
        logout: state => {
            localStorage.removeItem( USER_LS_KEY );
            state.authData = undefined;
        },
    },
} );

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
