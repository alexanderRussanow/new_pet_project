import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LS_KEY } from 'shared/const/localStorage';

export const rtkAPI = createApi( {
    reducerPath: 'rtkAPI',
    baseQuery: fetchBaseQuery( {
        baseUrl: __API__,
        prepareHeaders: headers => {
            const token = localStorage.getItem( USER_LS_KEY ) || '';
            if ( token ) {
                headers.set(
                    'Authorization',
                    `Bearer ${ token }` 
                );
            }
            return headers;
        },
    } ),
    endpoints: () => ( {} ),
} );

