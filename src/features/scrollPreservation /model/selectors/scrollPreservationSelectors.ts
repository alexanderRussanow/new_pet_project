import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollPreservationData = ( state: StateSchema ) => state.scroll.scroll;
export const getScrollPreservationByPath = createSelector(
    getScrollPreservationData,
    ( state: StateSchema, path: string ) => path,
    ( scroll, path ) => scroll[ path ] || 0
);
