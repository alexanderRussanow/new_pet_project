import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/ComponentRender';

describe(
    'editableProfileCard.cy.tsx',
    () => {
        it(
            'playground',
            () => {
                cy.intercept(
                    'GET',
                    '**/profile/*',
                    { fixture: 'profile.json' } 
                );
                cy.mount( <TestProvider
                    options={ {
                        initialState: {
                            user: {
                                authData: {
                                    id: '1',
                                },
                            },
                        },
                    } }>
                    <EditableProfileCard userId='1' />
                </TestProvider> );
            } 
        );
    } 
);
