import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { Text, TextSizeEnum } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';
import React from 'react';
import { useTranslation } from 'react-i18next';
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
                justify='center'
                width100>
                <Text
                    size={ TextSizeEnum.MEDIUM }
                    title={ t( 'HOME_PAGE' ) } />
            </Column>
        </Page>
    );
};

export default HomePage;
