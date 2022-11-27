import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { CountriesEnum } from '../model/types/CountriesEnum';

export interface CountriesSelectProps {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: ( value: CountriesEnum ) => void;
}

const optionList = Object.entries( CountriesEnum ).map( val => {
    return {
        value: val[ 0 ],
        label: val[ 1 ],
    };
} );

export const CountriesSelect: React.FC<CountriesSelectProps> = memo( ( { value, readonly, className, onChange } ) => {
    const { t } = useTranslation();

    const onChangeHandler = ( value: string ) => {
        onChange && onChange( value as CountriesEnum );
    };

    return <Select
        className={ className }
        label={ t( 'COUNTRY' ) }
        options={ optionList }
        readonly={ readonly }
        value={ value }
        onChange={ onChangeHandler } />;
} );
