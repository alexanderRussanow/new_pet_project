import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Column, Row } from 'shared/ui/Layout';
import { Listbox } from 'shared/ui/Listbox';
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
                <Row>
                    <Listbox
                        defaultValue='1'
                        items={ [
                            { value: '1', content: '1' },
                            { value: '2', content: '2' },
                            { value: '3', content: '3', disabled: true },
                        ] }
                        onChange={ ( value: string ) => console.log( value ) }
                    />
                </Row>
            </Column>
        </Page>
    );
};

export default HomePage;
