import { useEffect, useRef, useState, useCallback } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Portal } from 'shared/ui/Portal';
// styles
import classes from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ( { className, children, isOpen, onClose } ) => {
    // state
    const [
        isClosing,
        setIsClosing
    ] = useState( false );
    // refs
    const timerRef = useRef<ReturnType<typeof setTimeout>>( null );

    const handleClose = useCallback(
        () => {
            if ( onClose ) {
                setIsClosing( true );
                timerRef.current = setTimeout(
                    () => {
                        onClose();
                        setIsClosing( false );
                    },
                    150 
                );
            }
        },
        [
            onClose
        ] 
    );

    const onContainerClick = ( event: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
        event.stopPropagation();
    };

    const escapeListener = useCallback(
        ( event: KeyboardEvent ) => {
            if ( event.key === 'Escape' ) {
                handleClose();
            }
        },
        [
            handleClose
        ]
    );

    useEffect(
        () => {
            if ( isOpen ) {
                document.addEventListener(
                    'keydown',
                    escapeListener 
                );
            }
            return () => {
                document.removeEventListener(
                    'keydown',
                    escapeListener 
                );

                clearTimeout( timerRef.current );
            };
        },
        [
            isOpen,
            escapeListener
        ] 
    );

    return (
        <Portal>
            <div
                className={ classNames(
                    classes.modal,
                    { [ classes.opened ]: isOpen, [ classes.isClosing ]: isClosing },
                    [
                        className
                    ] 
                ) }>
                <div
                    className={ classNames( classes.modalOverlay ) }
                    onClick={ handleClose }>
                    <div
                        className={ classNames( classes.modalContent ) }
                        onClick={ onContainerClick }>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
