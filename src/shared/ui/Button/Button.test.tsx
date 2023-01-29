import { render, screen } from '@testing-library/react';
import { Button, ButtonThemeEnum } from './Button';

describe(
    'Button',
    () => {
        it(
            'should render',
            () => {
                render( <Button>Button</Button> );
                expect( screen.getByText( 'Button' ) ).toBeInTheDocument();
            } 
        );

        it(
            'should render with theme clear',
            () => {
                render( <Button theme={ ButtonThemeEnum.CLEAR }>Button</Button> );
                expect( screen.getByText( 'Button' ) ).toHaveClass( 'clear' );
            } 
        );
    } 
);
