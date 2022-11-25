import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LS_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'loginByUsername',
    async ( { username, password }: LoginByUsernameProps, { dispatch, rejectWithValue } ) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                { username, password } 
            );

            if ( !response.data ) {
                throw new Error( 'No data' );
            }

            localStorage.setItem(
                USER_LS_KEY,
                JSON.stringify( response.data ) 
            );
            dispatch( userActions.setAuthUser( response.data ) );

            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Wrong email or password' );
        }
    }
);
