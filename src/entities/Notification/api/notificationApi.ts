import { rtkAPI } from '@/shared/api/rtkApi';
import { NotificationType } from '../model/types/notifications';

const notificationApi = rtkAPI.injectEndpoints( {
    endpoints: build => ( {
        getNotifications: build.query<NotificationType[], null>( {
            query: () => ( {
                url: '/notifications',
                method: 'GET',
            } ),
        } ),
    } ),
} );

export const useGetNotificationsQuery = notificationApi.useGetNotificationsQuery;
