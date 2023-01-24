import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce( callback: ( ...args: any[] ) => void, delay: number ) {
    const timeoutRef = useRef( null ) as MutableRefObject<ReturnType<typeof setTimeout> | null>;

    return useCallback(
        ( ...args: any ) => {
            if ( timeoutRef.current ) {
                clearTimeout( timeoutRef.current );
            }

            timeoutRef.current = setTimeout(
                () => {
                    callback( ...args );
                },
                delay 
            );
        },
        [
            callback,
            delay
        ]
    );
}
