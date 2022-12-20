import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};
export type ReducerListEntry = [StateSchemaKey, Reducer];

export interface DynamicReducerLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: React.FC<DynamicReducerLoaderProps> = ( { children, removeAfterUnmount = true, reducers } ) => {
    // redux hooks
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            const mountedReducers = store.reducerManager.getReducerMap();

            Object.entries( reducers ).forEach( ( [
                reducerName,
                reducer
            ] ) => {
                const isAlreadyMounted = mountedReducers.hasOwnProperty( reducerName as StateSchemaKey );

                if ( !isAlreadyMounted ) {
                    store.reducerManager.add(
                        reducerName as StateSchemaKey,
                        reducer 
                    );
                    dispatch( { type: 'ADD_ASYNC_REDUCER' } );
                }
            } );
            return () => {
                if ( removeAfterUnmount ) {
                    Object.entries( reducers ).forEach( ( [
                        reducerName
                    ] ) => {
                        store.reducerManager.remove( reducerName as StateSchemaKey );
                        dispatch( { type: 'REMOVE_ASYNC_REDUCER' } );
                    } );
                }
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return <>{children}</>;
};
