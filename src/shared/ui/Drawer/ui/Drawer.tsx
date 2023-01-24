import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Overlay } from 'shared/ui/Overlay';
import { Portal } from 'shared/ui/Portal';

// stylea
import classes from './Drawer.module.scss';

export interface DrawerProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    className?: string;
    onClose?: () => void;
}

export const Drawer: React.FC<DrawerProps> = ( { children, isOpen, onClose, className } ) => {
    const { theme } = useTheme();
    return (
        <Portal>
            <div
                className={ classNames(
                    classes.Drawer,
                    { [ classes.opened ]: isOpen },
                    [
                        className,
                        theme,
                        'app-drawer'
                    ] 
                ) }>
                <Overlay onClose={ onClose } />
                <div className={ classes.content }>{children}</div>
            </div>
        </Portal>
         
    );
};
