import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
    const { t } = useTranslation( 'contact' );
    return <h2>{t( 'CONTACT' )}</h2>;
};

export default ContactPage;
