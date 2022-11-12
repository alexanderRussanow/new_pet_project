
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonThemeEnum } from '../../../shared/ui/Button';
import { classNames } from '../../../shared/lib/utility/UtilityMethods';
// styles
import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    flags?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ( { className, flags = true } ) => {
    const { i18n } = useTranslation();

    const langObj = {
        flags: {
            en: '🇺🇸',
            cz: '🇨🇿',
        },
        text: {
            en: 'EN',
            cz: 'CZ',
        },
    };
    const langMode = langObj[ flags ? 'flags' : 'text' ];

    const changeLanguage = () => {
        i18n.changeLanguage( i18n.language === 'cz' ? 'en' : 'cz' );
    };

    return (
        <Button
            theme={ ButtonThemeEnum.CLEAR }
            className={ classNames(
                classes.languageSwitcher,
                {},
                [
                    className as string
                ] 
            ) }
            onClick={ changeLanguage }>
            {i18n.language === 'cz' ? langMode.en : langMode.cz}
        </Button>
    );
};

// "eslint-plugin-react-hooks": "^4.3.0",
// "eslint-plugin-jsx-a11y": "^6.5.1",
// "eslint-plugin-import": "^2.25.4",
// "eslint-config-airbnb": "^19.0.4",
