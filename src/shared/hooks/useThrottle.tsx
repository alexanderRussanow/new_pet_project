import { useCallback, useRef } from 'react';

export function useThrottle( callback: ( ...args: any[] ) => void, delay: number ) {
    const timeoutRef = useRef( true );

    return useCallback(
        ( ...args ) => {
            if ( timeoutRef.current ) {
                callback( ...args );

                timeoutRef.current = false;

                setTimeout(
                    () => {
                        timeoutRef.current = true;
                    },
                    delay 
                );
            }
        },
        [
            callback,
            delay
        ]
    );
}
