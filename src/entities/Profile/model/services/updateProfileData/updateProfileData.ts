import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { profileFormDataSelector } from '../../selectors/profileDataSelectors';
import { ProfileType } from '../../types/ProfileTypes';

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
    'updateProfileData',
    async ( _, { rejectWithValue, extra, getState } ) => {
        const formData = profileFormDataSelector( getState() );
        try {
            const response = await extra.api.put<ProfileType>(
                '/profile',
                formData 
            );
            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Error' );
        }
    }
);
