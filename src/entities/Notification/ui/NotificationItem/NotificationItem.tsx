import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Card } from '@/shared/ui/Card';
import { Text, TextSizeEnum } from '@/shared/ui/Text';
import { NotificationType } from '../../../Notification/model/types/notifications';

// styles
import classes from './NotificationItem.module.scss';

export interface NotificationItemProps {
    notification: NotificationType;
    className?: string;
}

export const NotificationItem = ( { notification, className }: NotificationItemProps ) => {
    const content = (
        <Card
            className={ classNames(
                classes.NotificationItem,
                {},
                [
                    className
                ] 
            ) }>
            <Text
                content={ notification.text }
                size={ TextSizeEnum.SMALL }
                title={ notification.title } />
        </Card>
    );

    if ( notification.href ) {
        return (
            <a
                className={ classes.link }
                href={ notification.href }
                rel='noreferrer'
                target={ '_blank' }>
                {content}
            </a>
        );
    }

    return content;
};
