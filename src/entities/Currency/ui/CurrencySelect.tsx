import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
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
        label: val[ 1 ],
    };
} );

export const CurrencySelect: React.FC<CurrencySelectProps> = memo( ( { value, readonly, className, onChange } ) => {
    const { t } = useTranslation();

    const onChangeHandler = ( value: string ) => {
        onChange && onChange( value as CurrencyEnum );
    };

    return <Select
        className={ className }
        label={ t( 'CURRENCY' ) }
        options={ optionList }
        readonly={ readonly }
        value={ value }
        onChange={ onChangeHandler } />;
} );
