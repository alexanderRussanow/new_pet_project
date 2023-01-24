import { Popover as HeadlesPopover } from '@headlessui/react';
import { memo } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { DropdownDirection } from '../../../types/ui';

// styles
import classes from './Popover.module.scss';

export interface PopoverProps {
    trigger: React.ReactNode;
    direction?: DropdownDirection;
    children?: React.ReactNode;
    className?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': classes.bottomLeft,
    'bottom right': classes.bottomRight,
    'top left': classes.topLeft,
    'top right': classes.topRight,
};

export const Popover: React.FC<PopoverProps> = memo( ( { trigger, children, direction = 'bottom left', className } ) => {
    return (
        <HeadlesPopover
            className={ classNames(
                classes.Popover,
                {},
                [
                    className
                ] 
            ) }>
            <HeadlesPopover.Button
                as={ 'div' }
                className={ classes.trigger }>
                {trigger}
            </HeadlesPopover.Button>

            <HeadlesPopover.Panel
                className={ classNames(
                    classes.panel,
                    {},
                    [
                        mapDirectionClass[ direction ]
                    ] 
                ) }>{children}</HeadlesPopover.Panel>
        </HeadlesPopover>
    );
} );
