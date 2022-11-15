import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
// style
import classes from './home.module.scss';

const HomePage: React.FC = () => {
    const { t } = useTranslation( 'home' );
    const [
        value,
        setValue
    ] = useState( '' );

    return (
        <div>
            <h2 className={ classes.test }>{t( 'HOME' )}</h2>
            <Input
                placeholder='username'
                value={ value }
                onChange={ setValue } />
        </div>
    );
};

export default HomePage;
