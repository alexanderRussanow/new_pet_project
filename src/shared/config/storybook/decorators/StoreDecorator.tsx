import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { postReducer } from '@/entities/Post/model/slice/postSlice';
import { addNewCommentReducer } from '@/features/AddNewCommentForm';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice';
import { postDetailsMainReducer } from '@/pages/PostDetailsPage';
import { postsPageReducer } from '@/pages/PostsPage/model/slice/postsPageSlice';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    post: postReducer,
    postsDetails: postDetailsMainReducer,
    addNewComment: addNewCommentReducer,
    postsPage: postsPageReducer,
};

export const StoreDecorator = ( state: DeepPartial<StateSchema>, asyncReducers?: ReducersList ) => ( StoryComponent: Story ) =>
    (
        <StoreProvider
            asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }
            initialState={ state }>
            <StoryComponent />
        </StoreProvider>
    );
