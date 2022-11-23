import { lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<React.FC<LoginFormProps>>( () => import( './LoginForm' ) );
