import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { profileReducer } from 'entities/Profile';
import { userReducer } from 'entities/User';
import { API } from 'shared/api/api';
import { createReducerManager } from './reducerManager';
import { NavigateType, StateSchema } from './StateSchema';

export const createReduxStore = ( initialState: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>, navigate?: NavigateType ) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        profile: profileReducer,
    };

    const reducerManager = createReducerManager( rootReducer );

    const store = configureStore( {
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware( {
                thunk: {
                    extraArgument: {
                        api: API,
                        navigate,
                    },
                },
            } ),
    } );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
