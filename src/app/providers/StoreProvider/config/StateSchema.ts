import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, Dispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { PostSchema } from 'entities/Post';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { PostDetailsCommentSchema } from 'pages/PostDetail';
import { To, NavigateOptions } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    // async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
    post?: PostSchema;
    postComments?: PostDetailsCommentSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: ( state: StateSchema, action: AnyAction ) => CombinedState<StateSchema>;
    add: ( key: StateSchemaKey, reducer: Reducer ) => void;
    remove: ( key: StateSchemaKey ) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export type NavigateType = ( to: To, options?: NavigateOptions ) => void;

export interface ThunkExtraArgument {
    api: AxiosInstance;
    navigate?: NavigateType;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgument;
    dispatch?: Dispatch;
    state: StateSchema;
}
