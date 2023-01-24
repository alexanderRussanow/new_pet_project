import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Popover } from 'shared/ui/Popover/ui/Popover';
import BellIcon from 'shared/assets/icons/bell-20-20.svg';
import { memo, useCallback, useState } from 'react';
import { Drawer } from 'shared/ui/Drawer';

// style
import classes from './NotificationButton.module.scss';

export interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = memo( ( { className } ) => {
    const [
        opened,
        setOpened
    ] = useState( false );

    const onOpenCloseHandler = useCallback(
        () => {
            setOpened( prev => !prev );
        },
        [
            setOpened
        ] 
    );

    const detectDevice = () => {
        const isMobile = window.matchMedia;
        if ( !isMobile ) return false;
        const device = isMobile( '(pointer:coarse)' );
        return device.matches;
    };

    const isMobile = detectDevice();

    const trigger = (
        <Button
            theme={ ButtonThemeEnum.BACKGROUND_INVERTED }
            onClick={ onOpenCloseHandler }>
            <Icon Svg={ BellIcon } />
        </Button>
    );

    const content = <NotificationList
        className={ classNames(
            classes.notifications,
            { [ classes.mobile ]: isMobile },
            [] 
        ) } />;

    if ( isMobile ) {
        return (
            <>
                {trigger}
                <Drawer
                    isOpen={ opened }
                    onClose={ () => setOpened( false ) }>
                    {content}
                </Drawer>
            </>
        );
    }

    return (
        <Popover
            trigger={ trigger }
            className={ classNames(
                classes.NotificationButton,
                {},
                [
                    className
                ] 
            ) }>
            <NotificationList className={ classes.notifications } />
        </Popover>
    );
} );
