import { StateSchema } from 'app/providers/StoreProvider';
import { reduxCounterSelector } from 'entities/Counter';

describe(
    'getCounterSelect',
    () => {
        it(
            'should return the counter',
            () => {
                const state: DeepPartial<StateSchema> = {
                    counter: {
                        count: 100,
                    },
                };
                expect( reduxCounterSelector( state as StateSchema ) ).toEqual( { count: 100 } );
            } 
        );
    } 
);
