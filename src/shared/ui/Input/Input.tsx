import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// styles
import classes from './Input.module.scss';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>;

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string;
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
    onChange?: ( value: string ) => void;
}

export const Input: React.FC<InputProps> = memo( ( { className, value, type = 'text', placeholder, autofocus, readonly, onChange, ...props } ) => {
    // state
    const [
        isFocused,
        setIsFocused
    ] = useState( false );

    const [
        caretPosition,
        setCaretPosition
    ] = useState( 0 );
    // ref
    const inputRef = useRef<HTMLInputElement>( null );

    const onHandleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        onChange && onChange( event.target.value );
        setCaretPosition( event.target.selectionStart as number );
    };

    const onHandleFocus = () => setIsFocused( true );
    const onHandleBlur = () => setIsFocused( false );

    const onSelectionChange = ( event: React.SyntheticEvent<HTMLInputElement> ) => {
        const target = event.currentTarget as HTMLInputElement;
        setCaretPosition( target.selectionDirection === 'forward' ? ( target.selectionEnd as number ) : ( target.selectionStart as number ) );
    };

    const isCaretShown = isFocused && !readonly;

    useEffect(
        () => {
            if ( autofocus ) {
                inputRef.current?.focus();
                onHandleFocus();
            }
        },
        [
            autofocus
        ] 
    );

    return (
        <div
            className={ classNames(
                classes.inputWrapper,
                { [ classes.readonly ]: readonly },
                [
                    className
                ] 
            ) }>
            {placeholder ? <div className={ classes.placeholder }>{`${ placeholder }>`}</div> : null}
            <div className={ classes.caretWrapper }>
                <input
                    className={ classes.input }
                    readOnly={ readonly }
                    ref={ inputRef }
                    type={ type }
                    value={ value }
                    onBlur={ onHandleBlur }
                    onChange={ onHandleChange }
                    onFocus={ onHandleFocus }
                    onSelect={ onSelectionChange }
                    { ...props }
                />
                {isCaretShown ? (
                    <div
                        className={ classes.caret }
                        style={ {
                            left: caretPosition * 7.2,
                        } }
                    />
                ) : null}
            </div>
        </div>
    );
} );
