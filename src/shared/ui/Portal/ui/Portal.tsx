import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = ( { children, element } ) => {
    return createPortal(
        children,
        element || document.body 
    );
};
