import { EditableProfileCard } from '@/features/EditableProfileCard';
import React from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Page } from '@/widgets/Page';

// styles
import classes from './ProfilePage.module.scss';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ( { className } ) => {
    const { id } = useParams<{ id: string }>();

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
