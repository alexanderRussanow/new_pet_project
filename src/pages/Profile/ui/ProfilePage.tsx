import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
    const { t } = useTranslation( 'profile' );
    const dispatch = useDispatch();

    // default async reducer for login form
    const profilePageReducer: ReducersList = {
        profile: profileReducer,
    };

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
                <ProfileCard />
            </div>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
