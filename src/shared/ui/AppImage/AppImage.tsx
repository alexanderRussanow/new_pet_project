import { useLayoutEffect, useState } from 'react';

export interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    className?: string;
    fallback?: React.ReactElement;
    errorFallback?: React.ReactElement;
}

export const AppImage: React.FC<AppImageProps> = ( { className, src, alt = 'image', fallback, errorFallback, ...props } ) => {
    const [
        isError,
        setIsError
    ] = useState( false );

    const [
        isLoading,
        setIsLoading
    ] = useState( true );

    useLayoutEffect(
        () => {
            const image = new Image();
            image.src = src;
            image.onload = () => setIsLoading( false );
            image.onerror = () => {
                setIsLoading( false );
                setIsError( true );
            };
            return () => {
                image.onload = null;
                image.onerror = null;
            };
        },
        [
            src
        ] 
    );

    if ( isLoading && fallback ) {
        return fallback;
    }

    if ( isError && errorFallback ) {
        return errorFallback;
    }

    return <img
        alt={ alt }
        className={ className }
        src={ src }
        { ...props } />;
};
