import { profileReducer } from 'entities/Profile';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
    const { t } = useTranslation( 'profile' );

    // default async reducer for login form
    const profilePageReducer: ReducersList = {
        login: profileReducer,
    };

    return (
        <DynamicReducerLoader reducers={ profilePageReducer }>
            <div className={ classNames( classes.ProfilePage ) }>
                <h2>{t( 'PROFILE' )}</h2>;
            </div>
        </DynamicReducerLoader>
    );
};

export default ProfilePage;
