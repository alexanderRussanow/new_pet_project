import { classNames } from '@/shared/lib/utility/UtilityMethods';
import { Column } from '@/shared/ui/Layout/Column/Column';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetNotificationsQuery } from '../../../Notification/api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
// styles
import classes from './NotificationList.module.scss';


export interface NotificationListProps {
    className?: string;
}

export const NotificationList = ( { className }: NotificationListProps ) => {
    const { data, isLoading } = useGetNotificationsQuery(
        null,
        {
            pollingInterval: 10000,
        } 
    );

    const content = data?.map( notification => <NotificationItem
        key={ notification.id }
        notification={ notification } /> );

    const skeletons = Array( 4 )
        .fill( null )
        .map( ( _item, index ) => <Skeleton
            borderRadius='12px'
            className={ classes.skeleton }
            height={ 50 }
            key={ index }
            width={ '100%' } /> );

    return (
        <Column
            gap='small'
            className={ classNames(
                classes.NotificationList,
                {},
                [
                    className
                ] 
            ) }
            width100>
            {isLoading ? skeletons : content}
        </Column>
    );
};
