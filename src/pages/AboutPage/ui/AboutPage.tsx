import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// style
import classes from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2
                className={ classNames(
                    classes.AboutPage,
                    {},
                    [] 
                ) }>{t( 'ABOUT' )}</h2>
        </div>
    );
};

export default AboutPage;
