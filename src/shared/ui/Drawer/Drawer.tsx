import { useModal } from '../../hooks/useModal';
import { classNames } from '../../lib/utility/UtilityMethods';
import SwipeSubscripeService from '../../lib/services/SwipeSubscripeService';
import { memo, useCallback, useEffect } from 'react';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
// stylea
import classes from './Drawer.module.scss';


export interface DrawerProps {
    isOpen: boolean;
    children?: React.ReactNode;
    className?: string;
    lazy?: boolean;
    onClose?: () => void;
}

const DRAWER_SELECTOR = '*.src-shared-ui-Drawer-ui-Drawer-module__content' || '*._Drawer_h4bft_1 _opened_h4bft_40';

export const Drawer: React.FC<DrawerProps> = memo( ( { children, isOpen, className, lazy, onClose } ) => {
    const { isMounted, isClosing, onCloseHandler } = useModal( {
        isOpen,
        onClose,
    } );

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

    if ( lazy && !isMounted ) {
        return null;
    }

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
} );
