import { ErrorProfileEnum } from 'entities/Profile';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { profileFormDataSelector } from '../../selectors/profileDataSelectors';
import { ProfileType } from '../../types/ProfileTypes';
import { profileValidation } from '../validation/profileValifation';

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<ErrorProfileEnum[]>>(
    'updateProfileData',
    async ( _, { rejectWithValue, extra, getState } ) => {
        const formData = profileFormDataSelector( getState() );

        const validationErrors = profileValidation( formData as ProfileType );
        if ( validationErrors.length ) {
            return rejectWithValue( validationErrors );
        }

        try {
            const response = await extra.api.put<ProfileType>(
                '/profile',
                formData 
            );
            if ( !response.data ) {
                throw new Error( 'No data' );
            }
            return response.data;
        } catch ( error ) {
            return rejectWithValue( [
                ErrorProfileEnum.FETCH_ERROR
            ] );
        }
    }
);
