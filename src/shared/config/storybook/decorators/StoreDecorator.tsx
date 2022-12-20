import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { postReducer } from 'entities/Post';
import { profileReducer } from 'entities/Profile';
import { addNewCommentReducer } from 'features/AddNewComment';
import { loginReducer } from 'features/AuthByUsername';
import { postsFiltersReducer } from 'features/PostsFilters';
import { postDetailsMainReducer } from 'pages/PostDetailsPage';
import { postsPageReducer } from 'pages/PostsPage/model/slice/postsPageSlice';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    post: postReducer,
    postsDetails: postDetailsMainReducer,
    addNewComment: addNewCommentReducer,
    postsPage: postsPageReducer,
    postsFilters: postsFiltersReducer,
};

export const StoreDecorator = ( state: DeepPartial<StateSchema>, asyncReducers?: ReducersList ) => ( StoryComponent: Story ) =>
    (
        <StoreProvider
            asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }
            initialState={ state }>
            <StoryComponent />
        </StoreProvider>
    );
