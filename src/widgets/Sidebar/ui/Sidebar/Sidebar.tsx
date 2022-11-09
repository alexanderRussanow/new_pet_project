import { useState } from 'react';
import { classNames } from '../../../../shared/lib/UtilityMethods';
import { LanguageSwitcher } from '../../../LanguageSwitcher';
import { ThemeSwitcher } from '../../../ThemeSwitcher';

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
            className={ classNames(
                classes.sidebar,
                { [ classes.collapsed ]: collapsed },
                [
                    className
                ] 
            ) }>
            <button onClick={ toggleSidebar }>{collapsed ? '=>' : '<='}</button>
            <div className={ classes.switchers }>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
