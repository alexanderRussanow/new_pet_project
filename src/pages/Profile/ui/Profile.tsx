import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage: React.FC = () => {
    const { t } = useTranslation( 'profile' );
    return <h2>{t( 'PROFILE' )}</h2>;
};

export default ProfilePage;
