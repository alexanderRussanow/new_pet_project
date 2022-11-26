import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/ProfileTypes';

export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    'fetchProfileData',
    async ( _, { rejectWithValue, extra } ) => {
        try {
            const response = await extra.api.get<ProfileType>( '/profile' );

            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Wrong email or password' );
        }
    }
);
