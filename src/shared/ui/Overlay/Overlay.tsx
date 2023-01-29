import { memo } from 'react';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
// stylea
import classes from './Overlay.module.scss';

export interface OverlayProps {
    className?: string;
    onClose?: () => void;
}

export const Overlay: React.FC<OverlayProps> = memo( ( { onClose, className } ) => {
    return <div
        className={ classNames(
            classes.Overlay,
            {},
            [
                className
            ] 
        ) }
        onClick={ onClose } />;
} );
