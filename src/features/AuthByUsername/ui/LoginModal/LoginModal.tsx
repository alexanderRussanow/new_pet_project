import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

//styles
import classes from './LoginModal.module.scss';

interface LoginModalProps {
    isOpen: boolean;
    className?: string;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ( { className, isOpen, onClose } ) => {
    return (
        <Modal
            isOpen={ isOpen }
            className={ classNames(
                classes.loginModal,
                {},
                [
                    className
                ] 
            ) }
            lazy
            onClose={ onClose }>
            <h3>LOGIN FORM</h3>
            <LoginForm />
        </Modal>
    );
};
