import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};
export type ReducerListEntry = [StateSchemaKey, Reducer];

export interface DynamicReducerLoaderProps {
    reducers: ReducersList;
}

export const DynamicReducerLoader: React.FC<DynamicReducerLoaderProps> = ( { children, reducers } ) => {
    // redux hooks
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(
        () => {
            Object.entries( reducers ).forEach( ( [
                reducerName,
                reducer
            ] ) => {
                store.reducerManager.add(
                    reducerName as StateSchemaKey,
                    reducer 
                );
                dispatch( { type: 'ADD_ASYNC_REDUCER' } );
            } );
            return () => {
                Object.entries( reducers ).forEach( ( [
                    reducerName
                ] ) => {
                    store.reducerManager.remove( reducerName as StateSchemaKey );
                    dispatch( { type: 'REMOVE_ASYNC_REDUCER' } );
                } );
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return <>{children}</>;
};
