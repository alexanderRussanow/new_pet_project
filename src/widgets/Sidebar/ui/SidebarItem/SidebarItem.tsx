import { getUserAuthData } from '@/entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { SidebarItemType } from '../../model/types/SidebarItemType';
// styles
import classes from './SidebarItem.module.scss';

export interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo( ( { item, collapsed } ) => {
    const { Icon, path, text, privateOnly } = item;
    const { t } = useTranslation();
    // redux hooks
    const isAuth = useSelector( getUserAuthData );

    if ( privateOnly && !isAuth ) {
        return null;
    }
    
    return (
        <AppLink
            theme={ AppLinkTheme.SECONDARY }
            to={ path }
            className={ classNames(
                classes.navigationItem,
                { [ classes.collapsed ]: collapsed } 
            ) }>
            <div className={ classNames( classes.link ) }>
                <Icon className={ classes.icon } />
                <span className={ classNames( classes.linkText ) }>{t( text )}</span>
            </div>
        </AppLink>
    );
} );
