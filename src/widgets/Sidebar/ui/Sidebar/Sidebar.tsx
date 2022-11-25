import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { sidebarItems } from 'widgets/Sidebar/model/SidebarItemType';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
// styles
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo( ( { className } ) => {
    const [
        collapsed,
        setCollapsed
    ] = useState( false );

    const toggleSidebar = () => setCollapsed( !collapsed );

    const sidebarItemsList = useMemo(
        () => sidebarItems.map( item => <SidebarItem
            collapsed={ collapsed }
            item={ item }
            key={ item.path } /> ),
        [
            collapsed
        ] 
    );

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
                className={ classes.collapsBtn }
                data-testid='sidebar-toggle'
                size={ ButtonSizeEnum.MEDIUM }
                theme={ ButtonThemeEnum.BACKGROUND }
                square
                onClick={ toggleSidebar }>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={ classes.navigation }>{sidebarItemsList}</div>
            <div className={ classes.switchers }>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
} );
