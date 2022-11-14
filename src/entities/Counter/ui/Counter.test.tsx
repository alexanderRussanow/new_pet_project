import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Counter } from './Counter';

describe(
    'Counter',
    () => {
        it(
            'should render',
            () => {
                ComponentRender(
                    <Counter />,
                    {
                        initialState: {
                            counter: {
                                count: 100,
                            },
                        },
                    } 
                );
                expect( screen.getByTestId( 'counter-value' ) ).toHaveTextContent( '100' );
            } 
        );

        it(
            'should increment',
            () => {
                ComponentRender(
                    <Counter />,
                    {
                        initialState: {
                            counter: {
                                count: 100,
                            },
                        },
                    } 
                );
                screen.getByTestId( 'increment-button' ).click();
                expect( screen.getByTestId( 'counter-value' ) ).toHaveTextContent( '101' );
            } 
        );

        it(
            'should decrement',
            () => {
                ComponentRender(
                    <Counter />,
                    {
                        initialState: {
                            counter: {
                                count: 100,
                            },
                        },
                    } 
                );
                screen.getByTestId( 'decrement-button' ).click();
                expect( screen.getByTestId( 'counter-value' ) ).toHaveTextContent( '99' );
            } 
        );
    } 
);
