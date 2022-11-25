import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '..';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = ( { children, initialState, asyncReducers } ) => {
    const navigate = useNavigate();
    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate 
    );

    return <Provider store={ store }>{children}</Provider>;
};
