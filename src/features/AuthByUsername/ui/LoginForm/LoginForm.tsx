
import { getLoginUsernameSelector, getLoginPasswordSelector, getLoginIsLoadingSelector, getLoginErrorSelector } from '../../../AuthByUsername/model/selectors/loginSelectors';
import { loginByUsername } from '../../../AuthByUsername/model/services/loginByUsername';
import { loginReducer, loginActions } from '../../../AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { TextThemeEnum } from 'shared/ui/Text';
import { Text } from '../../../../shared/ui/Text';
// styles
import classes from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onLoginSuccess: () => void;
}

// default async reducer for login form
const loginFormReducer: ReducersList = {
    login: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo( ( { className, onLoginSuccess } ) => {
    const { t } = useTranslation();
    // redux hooks
    const dispatch = useAppDispatch();
    const username = useSelector( getLoginUsernameSelector );
    const password = useSelector( getLoginPasswordSelector );
    const isLoading = useSelector( getLoginIsLoadingSelector );
    const error = useSelector( getLoginErrorSelector );

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
        async () => {
            const result = await dispatch( loginByUsername( {
                username,
                password,
            } ) );
            if ( result.meta.requestStatus === 'fulfilled' ) {
                onLoginSuccess();
            }
        },
        [
            dispatch,
            password,
            username,
            onLoginSuccess
        ] 
    );

    const onEnterPress = useCallback(
        ( event: React.KeyboardEvent<HTMLInputElement> ) => {
            if ( event.key === 'Enter' && username && password ) {
                onLogin();
            }
        },
        [
            onLogin,
            username,
            password
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
                    onChange={ onPasswordChange }
                    onKeyPress={ onEnterPress }
                />
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
