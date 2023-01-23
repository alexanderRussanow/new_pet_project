import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createReduxStore } from '..';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ( { children, initialState, asyncReducers } ) => {
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema> 
    );

    return <Provider store={ store }>{children}</Provider>;
};
