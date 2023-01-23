import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { Column, Row } from 'shared/ui/Layout';
import { LanguageSwitcher } from '../../../LanguageSwitcher';
import { getSidebarItems } from '../../../Sidebar/model/selectors/getSidebarItems';
import { ThemeSwitcher } from '../../../ThemeSwitcher';
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
        () =>
            sidebarItems
                .filter( item => {
                    if ( item.path === RoutesPath.aboutPage ) {
                        return false;
                    }
                    return true;
                } )
                .map( item => <SidebarItem
                    collapsed={ collapsed }
                    item={ item }
                    key={ item.path } /> ),
        [
            collapsed,
            sidebarItems
        ]
    );

    return (
        <aside
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
            <Column
                align='start'
                className={ classes.navigation }
                gap='medium'
                role='navigation'>
                {sidebarItemsList}
            </Column>
            <Row
                className={ classes.switchers }
                gap='small'
                justify='evenly'>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </Row>
        </aside>
    );
} );
