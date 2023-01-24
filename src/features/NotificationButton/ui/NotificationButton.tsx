import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Popover } from 'shared/ui/Popover/ui/Popover';
import BellIcon from 'shared/assets/icons/bell-20-20.svg';
import { memo } from 'react';

// style
import classes from './NotificationButton.module.scss';

export interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = memo( ( { className } ) => {
    return (
        <Popover
            className={ classNames(
                classes.NotificationButton,
                {},
                [
                    className
                ] 
            ) }
            trigger={
                <Button theme={ ButtonThemeEnum.BACKGROUND_INVERTED }>
                    <Icon Svg={ BellIcon } />
                </Button>
            }>
            <NotificationList className={ classes.notifications } />
        </Popover>
    );
} );
