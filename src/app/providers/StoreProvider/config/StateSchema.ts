import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PostSchema } from 'entities/Post';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { PostsFiltersSchema } from 'features/PostsFilters';
import { PostsPageSchema } from 'pages/PostsPage';
import { NavigateOptions, To } from 'react-router-dom';
import { AddNewCommentSchema } from '../../../../features/AddNewComment/model/types/AddNewCommentSchema';
import { ScrollPreservationSchema } from './../../../../features/scrollPreservation /model/types/ScrollPreservationTypes';
import { PostDetailsMainSchema } from '../../../../pages/PostDetailsPage/model/types/PostDetailsMainSchema';

export interface StateSchema {
    user: UserSchema;
    scroll: ScrollPreservationSchema;
    // async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
    post?: PostSchema;
    addNewComment?: AddNewCommentSchema;
    postsPage?: PostsPageSchema;
    postsFilters?: PostsFiltersSchema;
    postsDetails?: PostDetailsMainSchema;
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
