import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { ThemeEnum, ThemeProvider } from '@/app/providers/ThemeProvider';
// styles 
import '@/app/styles/index.scss';

export interface ComponentRenderProps {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    theme?: ThemeEnum;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderProps;
}

export const TestProvider = ( { children, options = {} }: TestProviderProps ) => {
    const { route = '/', initialState, asyncReducers, theme = ThemeEnum.LIGHT } = options;

    return (
        <MemoryRouter
            initialEntries={ [
                route
            ] }>
            <StoreProvider
                asyncReducers={ asyncReducers }
                initialState={ initialState }>
                <I18nextProvider i18n={ i18nForTests }>
                    <ThemeProvider initialTheme={ theme }>
                        <div className={ `app ${ theme }` }>{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export const ComponentRender = ( component: ReactNode, options: ComponentRenderProps = {} ) => {
    return render( <TestProvider options={ options }>{component}</TestProvider> );
};
