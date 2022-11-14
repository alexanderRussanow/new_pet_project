import { createPortal } from 'react-dom';

interface PoratalProps {
    element?: HTMLElement;
}

export const Portal: React.FC<PoratalProps> = ( { children, element } ) => {
    return createPortal(
        children,
        element || document.body 
    );
};
