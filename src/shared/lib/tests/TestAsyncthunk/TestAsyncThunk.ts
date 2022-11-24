import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export type AsyncActionCreator<Return, Arg, RejectedValue> = ( arg: Arg ) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: AsyncActionCreator<Return, Arg, RejectedValue>;

    constructor( action: AsyncActionCreator<Return, Arg, RejectedValue> ) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = action;
    }

    async callThunk( arg: Arg ) {
        const action = this.actionCreator( arg );
        return await action(
            this.dispatch,
            this.getState,
            undefined 
        );
    }
}
