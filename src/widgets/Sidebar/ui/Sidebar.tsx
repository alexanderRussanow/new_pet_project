import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonSizeEnum, ButtonThemeEnum } from 'shared/ui/Button';
import { classNames } from '../../../shared/lib/utility/UtilityMethods';
import { LanguageSwitcher } from '../../LanguageSwitcher';
import { ThemeSwitcher } from '../../ThemeSwitcher';
import HomeIcon from '../../../shared/assets/icons/home.svg';
import ContactIcon from '../../../shared/assets/icons/contact.svg';
import BoardIcon from '../../../shared/assets/icons/board.svg';

// styles
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ( { className } ) => {
    const { t } = useTranslation();

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
                className={ classes.collapsBtn }
                data-testid='sidebar-toggle'
                size={ ButtonSizeEnum.MEDIUM }
                theme={ ButtonThemeEnum.BACKGROUND }
                square
                onClick={ toggleSidebar }>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={ classes.navigation }>
                <AppLink
                    className={ classNames( classes.navigationItem ) }
                    theme={ AppLinkTheme.SECONDARY }
                    to={ RoutesPath.home }>
                    <div className={ classNames( classes.link ) }>
                        <HomeIcon className={ classes.icon } />
                        <span className={ classNames( classes.linkText ) }>{t( 'HOME' )}</span>
                    </div>
                </AppLink>
                <AppLink
                    className={ classNames( classes.navigationItem ) }
                    theme={ AppLinkTheme.SECONDARY }
                    to={ RoutesPath.contact }>
                    <div className={ classNames( classes.link ) }>
                        <ContactIcon className={ classes.icon } />
                        <span className={ classNames( classes.linkText ) }>{t( 'CONTACT' )}</span>
                    </div>
                </AppLink>
                <AppLink
                    className={ classNames( classes.navigationItem ) }
                    theme={ AppLinkTheme.SECONDARY }
                    to={ RoutesPath.board }>
                    <div className={ classNames( classes.link ) }>
                        <BoardIcon className={ classes.icon } />
                        <span className={ classNames( classes.linkText ) }>{t( 'BOARD' )}</span>
                    </div>
                </AppLink>
            </div>

            <div className={ classes.switchers }>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
