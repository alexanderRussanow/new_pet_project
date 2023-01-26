/* eslint-disable react-hooks/rules-of-hooks */
import { useModal } from 'shared/hooks/useModal';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Overlay } from 'shared/ui/Overlay';
import { Portal } from 'shared/ui/Portal';
import SwipeSubscripeService from 'shared/lib/services/SwipeSubscripeService';
import { useCallback, useEffect } from 'react';

// stylea
import classes from './Drawer.module.scss';

export interface DrawerProps {
    isOpen: boolean;
    children?: React.ReactNode;
    className?: string;
    lazy?: boolean;
    onClose?: () => void;
}

const DRAWER_SELECTOR = '*.src-shared-ui-Drawer-ui-Drawer-module__content';

export const Drawer: React.FC<DrawerProps> = ( { children, isOpen, className, lazy, onClose } ) => {
    const { isMounted, isClosing, onCloseHandler } = useModal( {
        isOpen,
        onClose,
    } );

    if ( lazy && !isMounted ) {
        return null;
    }

    const handleSwipe = useCallback(
        ( direction: string ) => {
            if ( direction === 'down' ) {
                onCloseHandler();
            }
        },
        [
            onCloseHandler
        ]
    );

    useEffect(
        () => {
            if ( isOpen && isMounted ) {
                const swipeSubscriptee = SwipeSubscripeService.subscribe(
                    DRAWER_SELECTOR,
                    handleSwipe 
                );
                return () => {
                    swipeSubscriptee.unsubscribe();
                };
            }
        },
        [
            isOpen,
            isMounted,
            handleSwipe
        ] 
    );

    return (
        <Portal>
            <div
                className={ classNames(
                    classes.Drawer,
                    { [ classes.opened ]: isOpen, [ classes.isClosing ]: isClosing },
                    [
                        className
                    ] 
                ) }>
                <Overlay onClose={ onCloseHandler } />
                <div className={ classes.content }>{children}</div>
            </div>
        </Portal>
    );
};
