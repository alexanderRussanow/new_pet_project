import { useEffect } from '@storybook/addons';
import { createContext, memo, ReactNode, useMemo, useRef, useState } from 'react';

type ReactType = typeof import( 'react' );
type ReduxType = typeof import( 'redux' );

export interface ReactLoaderProps {
    React?: ReactType;
    Redux?: ReduxType;
    isLoaded?: boolean;
}

const ReactContext = createContext<ReactLoaderProps>( {} );

export const ReactDynamicLoader = memo( ( { children }: { children: ReactNode } ) => {
    const ReactRef = useRef<ReactType>();
    const ReduxRef = useRef<ReduxType>();
    const [
        isLoaded,
        setIsLoaded
    ] = useState( false );

    const importLibrarys = () => {
        return Promise.all( [
            import( 'react' ),
            import( 'redux' )
        ] );
    };

    const memoizedImportLibrarys = useMemo(
        () => ( {
            React: ReactRef.current,
            Redux: ReduxRef.current,
            isLoaded,
        } ),
        [
            isLoaded
        ]
    );

    useEffect(
        () => {
            importLibrarys().then( ( [
                React,
                Redux
            ] ) => {
                ReactRef.current = React;
                ReduxRef.current = Redux;
                setIsLoaded( true );
            } );
        },
        [] 
    );

    return <ReactContext.Provider value={ memoizedImportLibrarys }>{children}</ReactContext.Provider>;
} );
