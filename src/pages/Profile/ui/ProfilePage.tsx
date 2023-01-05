import {
    fetchProfileData,
    getProfileErrorSelector,
    getProfileFormDataSelector,
    getProfileIsLoadingSelector,
    getProfileReadonlySelector,
    getProfileValidationErrorsSelector,
    profileActions,
    ProfileCard,
    profileReducer,
    ProfileType,
} from 'entities/Profile';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Text, TextThemeEnum } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import { ProfilePageHeader } from '..';
// styles
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import classes from './ProfilePage.module.scss';
import { Column } from 'shared/ui/Layout';

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
    const dispatch = useAppDispatch();
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
                <Column
                    gap='small'
                    width100>
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
                </Column>
            </Page>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
