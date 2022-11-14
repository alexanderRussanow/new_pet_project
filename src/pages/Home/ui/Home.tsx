import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
// style
import classes from './home.module.scss';

const HomePage: React.FC = () => {
    const { t } = useTranslation( 'home' );
    return (
        <div>
            <h2 className={ classes.test }>{t( 'HOME' )}</h2>
            <Counter />
        </div>
    );
};

export default HomePage;
