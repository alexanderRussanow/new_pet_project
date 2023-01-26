import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe(
    'Sidebar',
    () => {
        it(
            'should render',
            () => {
                ComponentRender( <Sidebar /> );
                expect( screen.getByTestId( 'sidebar' ) ).toBeInTheDocument();
            } 
        );
        it(
            'should render with collapsed',
            () => {
                ComponentRender( <Sidebar /> );
                const btn = screen.getByTestId( 'sidebar-toggle' );
                expect( screen.getByTestId( 'sidebar' ) ).toBeInTheDocument();
                fireEvent.click( btn );
                expect( screen.getByTestId( 'sidebar' ) ).toHaveClass( 'collapsed ' );
            } 
        );
    } 
);
