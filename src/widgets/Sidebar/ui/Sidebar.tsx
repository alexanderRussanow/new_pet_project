import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { classNames } from '../../../shared/lib/utility/UtilityMethods';
import { LanguageSwitcher } from '../../LanguageSwitcher';
import { ThemeSwitcher } from '../../ThemeSwitcher';

// styles
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ( { className } ) => {
    const [
        collapsed,
        setCollapsed
    ] = useState( false );
    const toggleSidebar = () => setCollapsed( !collapsed );

    return (
        <div
            data-testid='sidebar'
            className={ classNames(
                classes.sidebar,
                { [ classes.collapsed ]: collapsed },
                [
                    className
                ] 
            ) }>
            <Button
                data-testid='sidebar-toggle'
                onClick={ toggleSidebar }>
                {collapsed ? '=>' : '<='}
            </Button>
            <div className={ classes.switchers }>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
