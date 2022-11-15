import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean;
    className?: string;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ( { className, isOpen, onClose } ) => {
    return (
        <Modal
            className={ className }
            isOpen={ isOpen }
            lazy
            onClose={ onClose }>
            <h3>LOGIN FORM</h3>
            <LoginForm />
        </Modal>
    );
};
