import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/SidebarItemType';
// styles
import classes from './SidebarItem.module.scss';

export interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo( ( { item, collapsed, onClick } ) => {
    const { Icon, path, text } = item;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={ AppLinkTheme.SECONDARY }
            to={ path }
            className={ classNames(
                classes.navigationItem,
                { [ classes.collapsed ]: collapsed } 
            ) }
            onClick={ onClick && onClick }>
            <a className={ classNames( classes.link ) }>
                <Icon className={ classes.icon } />
                <span className={ classNames( classes.linkText ) }>{t( text )}</span>
            </a>
        </AppLink>
    );
} );
