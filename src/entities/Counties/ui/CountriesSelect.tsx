import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox } from '@/shared/ui/Listbox/Listbox';
import { CountriesEnum } from '../model/consts/CountriesEnum';

export interface CountriesSelectProps {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: ( value: CountriesEnum ) => void;
}

const optionList = Object.entries( CountriesEnum ).map( val => {
    return {
        value: val[ 0 ],
        content: val[ 1 ],
    };
} );

export const CountriesSelect: React.FC<CountriesSelectProps> = memo( ( { value, readonly, className, onChange } ) => {
    const { t } = useTranslation();

    const onChangeHandler = ( value: string ) => {
        onChange && onChange( value as CountriesEnum );
    };

    return (
        <Listbox
            className={ className }
            defaultValue={ t( 'COUNTRY' ) }
            items={ optionList }
            label={ t( 'COUNTRY' ) }
            readonly={ readonly }
            value={ value }
            onChange={ onChangeHandler }
        />
    );
} );
