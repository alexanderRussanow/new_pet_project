import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
// styles
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = memo( ( { className } ) => {
    // redux hooks
    const sidebarItems = useSelector( getSidebarItems );

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
            collapsed,
            sidebarItems
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
                theme={ ButtonThemeEnum.BACKGROUND_INVERTED }
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
