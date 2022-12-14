import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PostSchema } from 'entities/Post';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { PostDetailsCommentSchema } from 'pages/PostDetailPage';
import { PostsPageSchema } from 'pages/PostsPage';
import { NavigateOptions, To } from 'react-router-dom';
import { AddNewCommentSchema } from './../../../../features/addNewComment/model/types/AddNewCommentSchema';

export interface StateSchema {
    user: UserSchema;
    // async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
    post?: PostSchema;
    postComments?: PostDetailsCommentSchema;
    addNewComment?: AddNewCommentSchema;
    postsPage?: PostsPageSchema;
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
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgument;
    state: StateSchema;
    dispatch?: Dispatch;
}
