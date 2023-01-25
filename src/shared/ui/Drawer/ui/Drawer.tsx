import { useModal } from 'shared/hooks/useModal';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Overlay } from 'shared/ui/Overlay';
import { Portal } from 'shared/ui/Portal';

// stylea
import classes from './Drawer.module.scss';

export interface DrawerProps {
    isOpen: boolean;
    children?: React.ReactNode;
    className?: string;
    lazy?: boolean;
    onClose?: () => void;
}

export const Drawer: React.FC<DrawerProps> = ( { children, isOpen, className, lazy, onClose } ) => {
    const { isMounted, isClosing, onCloseHandler } = useModal( {
        isOpen,
        onClose,
    } );

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
};
