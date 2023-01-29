import { memo } from 'react';
import { useModal } from '../../hooks/useModal';
import { Overlay } from '../../ui/Overlay/Overlay';
import { classNames } from '../../lib/utility/UtilityMethods';
import { Portal } from '../Portal/Portal';
// styles
import classes from './Modal.module.scss';

export interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    className?: string;
    lazy?: boolean;
    onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = memo( ( { className, children, isOpen, lazy, onClose } ) => {
    const { isClosing, isMounted, onCloseHandler } = useModal( {
        isOpen,
        onClose,
        animationDelay: 150,
    } );

    if ( lazy && !isMounted ) {
        return null;
    }

    return (
        <Portal>
            <div
                className={ classNames(
                    classes.Modal,
                    { [ classes.opened ]: isOpen, [ classes.isClosing ]: isClosing },
                    [
                        className
                    ] 
                ) }>
                <Overlay onClose={ onCloseHandler } />
                <div className={ classNames( classes.modalContent ) }>{children}</div>
            </div>
        </Portal>
    );
} );
