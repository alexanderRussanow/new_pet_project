import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

export type AsyncActionCreator<Return, Arg, RejectedValue> = ( arg: Arg ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock( 'axios' );
const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: AsyncActionCreator<Return, Arg, RejectedValue>;
    api: jest.Mocked<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor( action: AsyncActionCreator<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema> ) {
        this.dispatch = jest.fn();
        this.getState = jest.fn( () => state as StateSchema );
        this.actionCreator = action;
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk( arg: Arg ) {
        const action = this.actionCreator( arg );
        return await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate } 
        );
    }
}
