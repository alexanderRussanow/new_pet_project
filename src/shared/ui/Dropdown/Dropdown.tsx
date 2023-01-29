import { classNames } from '../../lib/utility/UtilityMethods';
import { DropdownDirection } from '../../types/ui';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { AppLink } from '../AppLink/AppLink';
// styles
import classes from './Dropdown.module.scss';

export interface DropdownItem {
    content: ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
}

export interface DropdownProps {
    items: DropdownItem[];
    className?: string;
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': classes.bottomLeft,
    'bottom right': classes.bottomRight,
    'top left': classes.topLeft,
    'top right': classes.topRight,
};

export const Dropdown: React.FC<DropdownProps> = ( { items, trigger, direction = 'bottom right', className } ) => {
    return (
        <Menu
            as={ 'div' }
            className={ classNames(
                classes.Dropdown,
                {},
                [
                    className
                ] 
            ) }>
            <Menu.Button className={ classes.trigger }>{trigger}</Menu.Button>
            <Menu.Items
                className={ classNames(
                    classes.items,
                    {},
                    [
                        mapDirectionClass[ direction ]
                    ] 
                ) }>
                {items.map( item => {
                    const content = ( { active }: { active: boolean } ) => (
                        <button
                            disabled={ item.disabled }
                            type='button'
                            className={ classNames(
                                classes.item,
                                { [ classes.active ]: active },
                                [] 
                            ) }
                            onClick={ item.onClick }>
                            {item.content}
                        </button>
                    );

                    if ( item.href ) {
                        return (
                            <Menu.Item
                                as={ AppLink }
                                disabled={ item.disabled }
                                key={ String( item.content ) }
                                refName='href'
                                to={ item.href }>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={ Fragment }
                            disabled={ item.disabled }
                            key={ String( item.content ) }>
                            {content}
                        </Menu.Item>
                    );
                } )}
            </Menu.Items>
        </Menu>
    );
};
