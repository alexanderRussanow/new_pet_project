import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from './../../types/Profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'fetchProfileData',
    async ( _, { rejectWithValue, extra } ) => {
        try {
            const response = await extra.api.get<Profile>( '/profile' );

            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Wrong email or password' );
        }
    } 
);
