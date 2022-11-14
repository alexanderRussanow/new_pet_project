import { counterActions, counterReducer, CounterSchema } from 'entities/Counter';

describe(
    'counterSlice',
    () => {
        it(
            'should handle increment',
            () => {
                const state: CounterSchema = {
                    count: 100,
                };
                expect( counterReducer(
                    state as CounterSchema,
                    counterActions.increment() 
                ) ).toEqual( {
                    count: 101,
                } );
            } 
        );

        it(
            'should handle decrement',
            () => {
                const state: CounterSchema = {
                    count: 100,
                };
                expect( counterReducer(
                    state as CounterSchema,
                    counterActions.decrement() 
                ) ).toEqual( {
                    count: 99,
                } );
            } 
        );

        it(
            'should handle unknown action',
            () => {
                const state: CounterSchema = {
                    count: 100,
                };
                expect( counterReducer(
                    state as CounterSchema,
                    { type: 'unknown' } 
                ) ).toEqual( {
                    count: 100,
                } );
            } 
        );

        it(
            'should handle initial state',
            () => {
                expect( counterReducer(
                    undefined,
                    { type: 'unknown' } 
                ) ).toEqual( {
                    count: 0,
                } );
            } 
        );
    } 
);
