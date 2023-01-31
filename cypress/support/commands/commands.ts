import * as common from './common/common';
import * as profile from './common/profile';
import * as post from './common/post';

Cypress.Commands.addAll( common );
Cypress.Commands.addAll( profile );
Cypress.Commands.addAll( post );

export {};
