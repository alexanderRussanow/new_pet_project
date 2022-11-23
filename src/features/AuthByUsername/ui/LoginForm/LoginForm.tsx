import {
    loginActions,
    loginErrorSelector,
    loginIsLoadingSelector,
    loginPasswordSelector,
    loginReducer,
    loginUsernameSelector,
} from 'features/AuthByUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { TextThemeEnum } from 'shared/ui/Text';
import { Text } from '../../../../shared/ui/Text';
// styles
import classes from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const LoginForm: React.FC<LoginFormProps> = memo( ( { className } ) => {
    const { t } = useTranslation();
    // redux hooks
    const dispatch = useDispatch();
    const username = useSelector( loginUsernameSelector );
    const password = useSelector( loginPasswordSelector );
    const isLoading = useSelector( loginIsLoadingSelector );
    const error = useSelector( loginErrorSelector );
    // default async reducer for login form
    const loginFormReducer: ReducersList = {
        login: loginReducer,
    };

    const onUsernameChange = useCallback(
        ( username: string ) => {
            dispatch( loginActions.setUsername( username ) );
        },
        [
            dispatch
        ]
    );

    const onPasswordChange = useCallback(
        ( password: string ) => {
            dispatch( loginActions.setPassword( password ) );
        },
        [
            dispatch
        ]
    );

    const onLogin = useCallback(
        () => {
            dispatch( loginByUsername( {
                username,
                password,
            } ) );
        },
        [
            dispatch,
            password,
            username
        ] 
    );

    return (
        <DynamicReducerLoader reducers={ loginFormReducer }>
            <div
                className={ classNames(
                    classes.loginForm,
                    {},
                    [
                        className
                    ] 
                ) }>
                <Text title='Login form' />
                {error ? <Text
                    content={ error }
                    theme={ TextThemeEnum.ERROR } /> : null}
                <Input
                    className={ classes.input }
                    placeholder={ t( 'USERNAME' ) }
                    type='text'
                    value={ username }
                    autofocus
                    onChange={ onUsernameChange } />
                <Input
                    className={ classes.input }
                    placeholder={ t( 'PASSWORD' ) }
                    type='text'
                    value={ password }
                    onChange={ onPasswordChange } />
                <Button
                    className={ classes.button }
                    disabled={ isLoading || false }
                    size={ ButtonSizeEnum.SMALL }
                    theme={ ButtonThemeEnum.OUTLINE }
                    onClick={ onLogin }>
                    {t( 'SIGNUP' )}
                </Button>
            </div>
        </DynamicReducerLoader>
    );
} );

export default LoginForm;
