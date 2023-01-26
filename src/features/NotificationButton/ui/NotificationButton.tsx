import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popover/ui/Popover';
import BellIcon from '@/shared/assets/icons/bell-20-20.svg';
import { memo, useCallback, useEffect, useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer';

// style
import classes from './NotificationButton.module.scss';

export interface NotificationButtonProps {
    className?: string;
}

/**
 * @TBD refactor useState and useEffect hooks for detection of mobile device
 */
export const NotificationButton: React.FC<NotificationButtonProps> = memo( ( { className } ) => {
    const [
        opened,
        setOpened
    ] = useState( false );

    const setWindowInnerWidth = useState( window.innerWidth )[ 1 ];

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

    useEffect(
        () => {
            const handleResize = () => {
                setWindowInnerWidth( window.innerWidth );
            };
            window.addEventListener(
                'resize',
                handleResize 
            );
            return () => {
                window.removeEventListener(
                    'resize',
                    handleResize 
                );
            };
        },
        [
            setWindowInnerWidth
        ] 
    );

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
