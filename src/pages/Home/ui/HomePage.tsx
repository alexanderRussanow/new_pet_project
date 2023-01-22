import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Column } from 'shared/ui/Layout';
import { Page } from 'widgets/Page';
// styles
import classes from './HomePage.module.scss';

export interface HomePageProps {
    className?: string;
}

const HomePage: React.FC<HomePageProps> = ( { className } ) => {
    const { t } = useTranslation( 'home' );

    return (
        <Page
            className={ classNames(
                classes.HomePage,
                {},
                [
                    className
                ] 
            ) }>
            <Column
                align='center'
                className={ classes.content }
                justify='center'>
                <h2>{t( 'HOME' )}</h2>
            </Column>
        </Page>
    );
};

export default HomePage;
