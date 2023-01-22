import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './profileSlice';

describe(
    'profileSlice tests',
    () => {
        it(
            'should update readonly field',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    readonly: true,
                };
                expect( profileReducer(
                    state as ProfileSchema,
                    profileActions.setReadonly( false ) 
                ) ).toEqual( { readonly: false } );
            } 
        );
        it(
            'cancel edit profile data',
            () => {
                const state: DeepPartial<ProfileSchema> = {};
                expect( profileReducer(
                    state as ProfileSchema,
                    profileActions.cancelEditProfileData() 
                ) ).toEqual( {
                    readonly: true,
                    validationErrors: undefined,
                } );
            } 
        );
        it(
            'edit profile data',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    editableData: {
                        name: 'John',
                    },
                };
                expect( profileReducer(
                    state as ProfileSchema,
                    profileActions.editProfileData( {
                        name: '8888',
                    } )
                ) ).toEqual( {
                    editableData: {
                        name: '8888',
                    },
                } );
            } 
        );
        it(
            'test update profile pending',
            () => {
                const state: DeepPartial<ProfileSchema> = {
                    isLoading: false,
                    error: undefined,
                    validationErrors: undefined,
                };
                expect( profileReducer(
                    state as ProfileSchema,
                    updateProfileData.pending 
                ) ).toEqual( {
                    isLoading: true,
                    error: undefined,
                    validationErrors: undefined,
                } );
            } 
        );
    } 
);
