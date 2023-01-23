import { StateSchema } from 'app/providers/StoreProvider';
import { scrollPreservationSliceActions } from 'features/scrollPreservation ';
import { getScrollPreservationByPath } from 'features/scrollPreservation /model/selectors/scrollPreservationSelectors';
import { memo, MutableRefObject, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useInfinityScroll } from 'shared/hooks/useInfinityScroll';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { useThrottle } from 'shared/hooks/useThrottle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
// styles
import classes from './Page.module.scss';

export interface PageProps {
    className?: string;
    children?: React.ReactNode;
    onScrollEnd?: () => void;
}

export const Page: React.FC<PageProps> = memo( ( { className, children, onScrollEnd } ) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    // redux hooks
    const dispatch = useAppDispatch();
    const scrollPosition = useSelector( ( state: StateSchema ) => getScrollPreservationByPath(
        state,
        pathname 
    ) );

    /**
     * @TODO add event type
     */
    const onScroll = useThrottle(
        event => {
            dispatch( scrollPreservationSliceActions.setScroll( {
                path: pathname,
                position: event.currentTarget.scrollTop,
            } ) );
        },
        500 
    );

    useInfinityScroll( {
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    } );

    useInitialEffect( () => {
        wrapperRef.current.scrollTop = scrollPosition;
    } );

    return (
        <main
            ref={ wrapperRef }
            className={ classNames(
                classes.Page,
                {},
                [
                    className
                ] 
            ) }
            onScroll={ onScroll }>
            {children}
            {onScrollEnd ? <div
                className={ classes.triggerRef }
                ref={ triggerRef } /> : null}
        </main>
    );
} );
