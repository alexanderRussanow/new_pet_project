import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { postReducer } from 'entities/Post';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    post: postReducer,
};

export const StoreDecorator =
    ( state: DeepPartial<StateSchema>, asyncReducers?: ReducersList ) => ( StoryComponent: Story ) =>
        (
            <StoreProvider
                asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }
                initialState={ state }>
                <StoryComponent />
            </StoreProvider>
        );
