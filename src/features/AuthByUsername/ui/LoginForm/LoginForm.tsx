import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonSizeEnum } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
// styles
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ( { className } ) => {
    const { t } = useTranslation();
    return (
        <div
            className={ classNames(
                classes.loginForm,
                {},
                [
                    className
                ] 
            ) }>
            <Input
                className={ classes.input }
                placeholder={ t( 'USERNAME' ) }
                type='text'
                autofocus />
            <Input
                className={ classes.input }
                placeholder={ t( 'PASSWORD' ) }
                type='text' />
            <Button
                className={ classes.button }
                size={ ButtonSizeEnum.SMALL }>
                {t( 'SIGNUP' )}
            </Button>
        </div>
    );
};
