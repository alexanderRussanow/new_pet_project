import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPreservationSchema } from '../types/ScrollPreservationTypes';

const initialState: ScrollPreservationSchema = {
    scroll: {},
};

export const scrollPreservationSlice = createSlice( {
    name: 'scrollPreservationSlice',
    initialState,
    reducers: {
        setScroll: ( state, { payload }: PayloadAction<{ path: string; position: number }> ) => {
            state.scroll[ payload.path ] = payload.position;
        },
    },
} );

export const { actions: scrollPreservationSliceActions } = scrollPreservationSlice;
export const { reducer: scrollPreservationSliceReducer } = scrollPreservationSlice;
