import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

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
            <Suspense fallback={ <Loader /> }>
                <LoginFormLazy onLoginSuccess={ onClose } />
            </Suspense>
        </Modal>
    );
};
