import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTransaltion/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe(
    'Sidebar',
    () => {
        it(
            'should render',
            () => {
                renderWithTranslation( <Sidebar /> );
                expect( screen.getByTestId( 'sidebar' ) ).toBeInTheDocument();
            } 
        );
        it(
            'should render with collapsed',
            () => {
                renderWithTranslation( <Sidebar /> );
                const btn = screen.getByTestId( 'sidebar-toggle' );
                expect( screen.getByTestId( 'sidebar' ) ).toBeInTheDocument();
                fireEvent.click( btn );
                expect( screen.getByTestId( 'sidebar' ) ).toHaveClass( 'collapsed ' );
            } 
        );
    } 
);
