import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileErrorSelector,
    profileFormDataSelector,
    profileIsLoadingSelector,
    profileReadonlySelector,
    profileReducer,
    ProfileType,
} from 'entities/Profile';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { ProfilePageHeader } from '..';
// styles
import classes from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
    // redux hooks
    const dispatch = useDispatch();
    const isLoading = useSelector( profileIsLoadingSelector );
    const error = useSelector( profileErrorSelector );
    const readonly = useSelector( profileReadonlySelector );
    const profileFormData = useSelector( profileFormDataSelector );

    // default async reducer for login form
    const profilePageReducer: ReducersList = {
        profile: profileReducer,
    };

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

    useEffect(
        () => {
            dispatch( fetchProfileData() );
        },
        [
            dispatch
        ] 
    );

    return (
        <DynamicReducerLoader reducers={ profilePageReducer }>
            <div className={ classNames( classes.ProfilePage ) }>
                <ProfilePageHeader />
                <ProfileCard
                    error={ error }
                    isLoading={ isLoading }
                    profile={ profileFormData }
                    readonly={ readonly }
                    onEditProfileData={ onEditProfileData }
                />
            </div>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
