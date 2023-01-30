import { UserRolesEnum } from '@/entities/User';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { RoutesPath } from '@/shared/types/routesPaths';
import { screen } from '@testing-library/react';
import { AppRouter } from './AppRouter';

describe(
    'AppRouter',
    () => {
        it(
            'should render',
            async () => {
                ComponentRender(
                    <AppRouter />,
                    {
                        route: RoutesPath.home,
                    } 
                );

                const page = await screen.findByTestId( 'homePage' );
                expect( page ).toBeInTheDocument();
            } 
        );
        it(
            'should render 404 page',
            async () => {
                ComponentRender(
                    <AppRouter />,
                    {
                        route: '/not-existing-route',
                    } 
                );

                const page = await screen.findByTestId( 'page404' );
                expect( page ).toBeInTheDocument();
            } 
        );
        it(
            'should redirect to home page if user is not authenticated',
            async () => {
                ComponentRender(
                    <AppRouter />,
                    {
                        route: RoutesPath.posts,
                    } 
                );

                const page = await screen.findByTestId( 'homePage' );
                expect( page ).toBeInTheDocument();
            } 
        );
        it(
            'should render posts page if user is authenticated',
            async () => {
                ComponentRender(
                    <AppRouter />,
                    {
                        route: RoutesPath.profile + '1',
                        initialState: {
                            user: {
                                isInited: true,
                                authData: {},
                            },
                        },
                    } 
                );

                const page = await screen.findByTestId( 'profilePage' );
                expect( page ).toBeInTheDocument();
            } 
        );
        it(
            'should redirect to forbiden page if user has not required role',
            async () => {
                ComponentRender(
                    <AppRouter />,
                    {
                        route: RoutesPath.adminPage,
                        initialState: {
                            user: {
                                isInited: true,
                                authData: {},
                            },
                        },
                    } 
                );

                const page = await screen.findByTestId( 'forbidenPage' );
                expect( page ).toBeInTheDocument();
            } 
        );
        it(
            'should render admin page if user has required role',
            async () => {
                ComponentRender(
                    <AppRouter />,
                    {
                        route: RoutesPath.adminPage,
                        initialState: {
                            user: {
                                isInited: true,
                                authData: {
                                    roles: [
                                        UserRolesEnum.ADMIN,
                                    ],
                                },
                            },
                        },
                    } 
                );

                const page = await screen.findByTestId( 'adminPage' );
                expect( page ).toBeInTheDocument();
            } 
        );
    } 
);
