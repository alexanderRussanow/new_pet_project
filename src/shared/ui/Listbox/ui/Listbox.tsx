import { Listbox as HeadlessListbox } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { Button } from '../../Button';
import { Row } from '../../Layout';
import { classNames } from '../../../lib/utility/UtilityMethods';
import { DropdownDirection } from '../../..//types/ui';

// styles
import classes from './Listbox.module.scss';

interface ListboxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListboxProps {
    items?: ListboxItem[];
    label?: string;
    value?: string;
    defaultValue?: string;
    className?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
    onChange: ( value: string ) => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': classes.bottomLeft,
    'bottom right': classes.bottomRight,
    'top left': classes.topLeft,
    'top right': classes.topRight,
};

export const Listbox: React.FC<ListboxProps> = memo( ( { items, value, defaultValue, readonly, className, label, direction = 'bottom right', onChange } ) => {
    const onSelectHandler = ( item: ListboxItem ) => {
        onChange( item.content as string );
    };

    return (
        <>
            <Row gap={ 'small' }>
                {label ? <span
                    className={ classNames(
                        '',
                        { [ classes.disabled ]: readonly },
                        [] 
                    ) }>{`${ label }>`}</span> : null}
                <HeadlessListbox
                    as={ 'div' }
                    disabled={ readonly }
                    value={ value }
                    className={ classNames(
                        classes.Listbox,
                        {
                            [ classes.readonly ]: readonly,
                        },
                        [
                            className
                        ]
                    ) }
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    onChange={ onSelectHandler }>
                    <HeadlessListbox.Button
                        as={ 'div' }
                        className={ classes.trigger }>
                        <Button disabled={ readonly }>{value ?? defaultValue}</Button>
                    </HeadlessListbox.Button>

                    <HeadlessListbox.Options
                        className={ classNames(
                            classes.options,
                            {},
                            [
                                mapDirectionClass[ direction ]
                            ] 
                        ) }>
                        {items &&
                            items.map( item => (
                                <HeadlessListbox.Option
                                    as={ Fragment }
                                    disabled={ item.disabled }
                                    key={ item.value }
                                    value={ item }>
                                    {( { active } ) => (
                                        <li
                                            className={ classNames(
                                                classes.option,
                                                { [ classes.active ]: active, [ classes.disabled ]: item.disabled },
                                                []
                                            ) }>
                                            {item.content}
                                        </li>
                                    )}
                                </HeadlessListbox.Option>
                            ) )}
                    </HeadlessListbox.Options>
                </HeadlessListbox>
            </Row>
        </>
    );
} );
