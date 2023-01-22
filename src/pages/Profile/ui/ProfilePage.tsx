import { EditableProfileCard } from 'features/EditableProfileCard';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page';

// styles
import classes from './ProfilePage.module.scss';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ( { className } ) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation( 'profile' );

    if ( !id ) {
        return <Text content={ t( 'PROFILE_DOES_NOT_EXIST' ) } />;
    }

    return (
        <Page
            className={ classNames(
                classes.ProfilePage,
                {},
                [
                    className
                ] 
            ) }>
            <EditableProfileCard userId={ id } />
        </Page>
    );
};

export default ProfilePage;
