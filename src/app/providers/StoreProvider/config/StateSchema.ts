import { rtkAPI } from './../../../../shared/api/rtkApi';
import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { PostSchema } from '@/entities/Post';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { PostsPageSchema } from '@/pages/PostsPage';
import { NavigateOptions, To } from 'react-router-dom';
import { AddNewCommentSchema } from '../../../../features/AddNewCommentForm/model/types/AddNewCommentSchema';
import { ScrollPreservationSchema } from './../../../../features/scrollPreservation /model/types/ScrollPreservationTypes';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { PostDetailsMainSchema } from '@/pages/PostDetailsPage';

export interface StateSchema {
    user: UserSchema;
    scroll: ScrollPreservationSchema;
    // async reducers
    login?: LoginSchema;
    profile?: ProfileSchema;
    post?: PostSchema;
    addNewComment?: AddNewCommentSchema;
    postsPage?: PostsPageSchema;
    postsDetails?: PostDetailsMainSchema;
    [rtkAPI.reducerPath]: ReturnType<typeof rtkAPI.reducer>;
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
