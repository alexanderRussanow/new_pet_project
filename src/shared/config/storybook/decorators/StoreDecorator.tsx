import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
};

export const StoreDecorator =
    ( state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>> ) => ( StoryComponent: Story ) =>
        (
            <StoreProvider
                asyncReducers={ { ...defaultAsyncReducers, ...asyncReducers } }
                initialState={ state }>
                <StoryComponent />
            </StoreProvider>
        );
