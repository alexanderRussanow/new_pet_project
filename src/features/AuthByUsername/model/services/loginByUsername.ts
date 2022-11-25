import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LS_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'loginByUsername',
    async ( { username, password }: LoginByUsernameProps, { dispatch, rejectWithValue, extra } ) => {
        try {
            const response = await extra.api.post<User>(
                '/login',
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
