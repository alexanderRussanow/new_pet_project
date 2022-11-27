import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './Select.module.scss';

export interface SelectOptions {
    value: string;
    label: string;
}

export interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    readonly?: boolean;
    onChange?: ( value: string ) => void;
}

export const Select: React.FC<SelectProps> = memo( ( { label, options, value, readonly, onChange, className } ) => {
    const onChangeHandler = ( event: React.ChangeEvent<HTMLSelectElement> ) => {
        onChange && onChange( event.target.value );
    };

    const optionsList = useMemo(
        () => {
            return (
                options &&
            options.map( option => {
                return (
                    <option
                        className={ classes.option }
                        key={ option.value }
                        value={ option.value }>
                        {option.label}
                    </option>
                );
            } )
            );
        },
        [
            options
        ] 
    );

    return (
        <div
            className={ classNames(
                classes.SelectWrapper,
                { [ classes.readonly ]: readonly },
                [
                    className
                ] 
            ) }>
            {label ? <span className={ classes.label }>{`${ label }>`}</span> : null}
            <select
                className={ classes.select }
                disabled={ readonly }
                value={ value }
                onChange={ onChangeHandler }>
                {optionsList}
            </select>
        </div>
    );
} );
