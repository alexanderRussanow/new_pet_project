import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Page } from '@/widgets/Page';
// style
import classes from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Page
            className={ classNames(
                classes.AboutPage,
                {},
                [] 
            ) }>
            <h2>{t( 'ABOUT' )}</h2>
        </Page>
    );
};

export default AboutPage;
