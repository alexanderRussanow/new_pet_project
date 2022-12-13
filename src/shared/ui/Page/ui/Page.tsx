import { memo, MutableRefObject, useRef } from 'react';
import { useInfinityScroll } from 'shared/hooks/useInfinityScroll';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './Page.module.scss';

export interface PageProps {
    className?: string;
    onScrollEnd?: () => void;
}

export const Page: React.FC<PageProps> = memo( ( { className, children, onScrollEnd } ) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinityScroll( {
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    } );

    return (
        <section
            ref={ wrapperRef }
            className={ classNames(
                classes.Page,
                {},
                [
                    className
                ] 
            ) }>
            {children}
            <div ref={ triggerRef } />
        </section>
    );
} );
