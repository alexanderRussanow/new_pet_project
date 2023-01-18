import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox } from 'shared/ui/Listbox';
import { CurrencyEnum } from '../model/types/CurrencyEnum';

export interface CurrencySelectProps {
    value?: string;
    readonly?: boolean;
    className?: string;
    onChange?: ( value: CurrencyEnum ) => void;
}

const optionList = Object.entries( CurrencyEnum ).map( val => {
    return {
        value: val[ 0 ],
        content: val[ 1 ],
    };
} );

export const CurrencySelect: React.FC<CurrencySelectProps> = memo( ( { value, readonly, className, onChange } ) => {
    const { t } = useTranslation();

    const onChangeHandler = ( value: string ) => {
        onChange && onChange( value as CurrencyEnum );
    };

    return (
        <Listbox
            className={ className }
            defaultValue={ t( 'CURRENCY' ) }
            items={ optionList }
            label={ t( 'CURRENCY' ) }
            readonly={ readonly }
            value={ value }
            onChange={ onChangeHandler } />
    );
} );
