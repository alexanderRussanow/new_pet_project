import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createReduxStore } from '..';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ( { children, initialState } ) => {
    const store = createReduxStore( initialState as StateSchema );

    return <Provider store={ store }>{children}</Provider>;
};
