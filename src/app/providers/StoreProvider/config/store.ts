import { rtkAPI } from './../../../../shared/api/rtkApi';
import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { scrollPreservationSliceReducer } from '@/features/scrollPreservation ';
import { API } from '@/shared/api/api';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export const createReduxStore = ( initialState: StateSchema, asyncReducers?: ReducersMapObject<StateSchema> ) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scroll: scrollPreservationSliceReducer,
        [ rtkAPI.reducerPath ]: rtkAPI.reducer,
    };

    const reducerManager = createReducerManager( rootReducers );

    const store = configureStore( {
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware( {
                thunk: {
                    extraArgument: {
                        api: API,
                    },
                },
            } ).concat( rtkAPI.middleware ),
    } );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
