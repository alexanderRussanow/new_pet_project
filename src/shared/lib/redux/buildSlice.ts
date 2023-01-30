import { bindActionCreators, createSlice, CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export function buildSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>( options: CreateSliceOptions<State, CaseReducers, Name> ) {
    const slice = createSlice( options );

    const useActions = () => {
        const dispatch = useDispatch();
        return useMemo(
            () =>
                bindActionCreators(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    slice.actions,
                    dispatch
                ),
            [
                dispatch
            ]
        );
    };

    return {
        ...slice,
        useActions,
    };
}
