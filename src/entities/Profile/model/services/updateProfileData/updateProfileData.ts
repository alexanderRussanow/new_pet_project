import { ErrorProfileEnum } from 'entities/Profile';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileFormDataSelector } from '../../selectors/profileDataSelectors';
import { ProfileType } from '../../types/ProfileTypes';
import { profileValidation } from '../validation/profileValifation';

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<ErrorProfileEnum[]>>(
    'updateProfileData',
    async ( _, { rejectWithValue, extra, getState } ) => {
        const formData = getProfileFormDataSelector( getState() );
        const validationErrors = profileValidation( formData as ProfileType );
        const profileId = formData?.id;

        if ( validationErrors.length ) {
            return rejectWithValue( validationErrors );
        }

        try {
            const response = await extra.api.put<ProfileType>(
                '/profile/' + profileId,
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
