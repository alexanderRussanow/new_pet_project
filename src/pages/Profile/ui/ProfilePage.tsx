import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    getProfileErrorSelector,
    getProfileFormDataSelector,
    getProfileIsLoadingSelector,
    getProfileReadonlySelector,
    profileReducer,
    ProfileType,
    getProfileValidationErrorsSelector,
} from 'entities/Profile';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Page } from 'shared/ui/Page';
import { Text, TextThemeEnum } from 'shared/ui/Text';
import { ProfilePageHeader } from '..';
// styles
import classes from './ProfilePage.module.scss';

// default async reducer for login form
const profilePageReducer: ReducersList = {
    profile: profileReducer,
};

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ( { className } ) => {
    const { t } = useTranslation( 'profile' );
    const { id } = useParams<{ id: string }>();
    // redux hooks
    const dispatch = useDispatch();
    const isLoading = useSelector( getProfileIsLoadingSelector );
    const error = useSelector( getProfileErrorSelector );
    const readonly = useSelector( getProfileReadonlySelector );
    const profileFormData = useSelector( getProfileFormDataSelector );
    const validationErrors = useSelector( getProfileValidationErrorsSelector );

    const onEditProfileData = useCallback(
        ( key: keyof ProfileType, value: string ) => {
            const newProfile: DeepPartial<ProfileType> = {
                ...profileFormData,
                [ key ]: value,
            };
            dispatch( profileActions.editProfileData( newProfile as ProfileType ) );
        },
        [
            dispatch,
            profileFormData
        ]
    );

    useInitialEffect( () => {
        if ( id ) {
            dispatch( fetchProfileData( id ) );
        }
    } );

    return (
        <DynamicReducerLoader reducers={ profilePageReducer }>
            <Page
                className={ classNames(
                    classes.ProfilePage,
                    {},
                    [
                        className
                    ] 
                ) }>
                <ProfilePageHeader />
                {validationErrors ? validationErrors.map( error => <Text
                    content={ t( error ) }
                    key={ error }
                    theme={ TextThemeEnum.ERROR } /> ) : null}
                <ProfileCard
                    error={ error }
                    isLoading={ isLoading }
                    profile={ profileFormData }
                    readonly={ readonly }
                    onEditProfileData={ onEditProfileData }
                />
            </Page>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
