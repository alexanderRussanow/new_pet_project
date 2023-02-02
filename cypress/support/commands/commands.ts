import * as common from './common/common';
import * as profile from './common/profile';
import * as post from './common/post';
import * as comments from './common/comments';

Cypress.Commands.addAll( common );
Cypress.Commands.addAll( profile );
Cypress.Commands.addAll( post );
Cypress.Commands.addAll( comments );

export {};
