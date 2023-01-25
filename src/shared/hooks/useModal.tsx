import { useState, useRef, useCallback, useEffect } from 'react';

export interface UseModalProps {
    isOpen: boolean;
    animationDelay?: number;
    onClose?: () => void;
}

export function useModal( { isOpen, animationDelay = 150, onClose }: UseModalProps ) {
    // state
    const [
        isClosing,
        setIsClosing
    ] = useState( false ); // isClosing is true when the modal is closing, use for styling
    const [
        isMounted,
        setIsMounted
    ] = useState( false );
    // refs
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const onCloseHandler = useCallback(
        () => {
            if ( onClose ) {
                setIsClosing( true );
                timerRef.current = setTimeout(
                    () => {
                        onClose();
                        setIsClosing( false );
                    },
                    animationDelay 
                );
            }
        },
        [
            onClose,
            animationDelay
        ] 
    );

    const onEscapeHandler = useCallback(
        ( event: KeyboardEvent ) => {
            if ( event.key === 'Escape' ) {
                onCloseHandler();
            }
        },
        [
            onCloseHandler
        ]
    );

    useEffect(
        () => {
            if ( isOpen ) {
                setIsMounted( true );
                document.addEventListener(
                    'keydown',
                    onEscapeHandler 
                );
            }
            return () => {
                document.removeEventListener(
                    'keydown',
                    onEscapeHandler 
                );

                clearTimeout( timerRef.current );
            };
        },
        [
            isOpen,
            onEscapeHandler
        ] 
    );

    return {
        isClosing,
        isMounted,
        onCloseHandler,
    };
}
