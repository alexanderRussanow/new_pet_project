import { USER_LS_KEY } from 'shared/const/localStorage';
import axios from 'axios';

export const API = axios.create( {
    baseURL: __API__,
} );

API.interceptors.request.use( config => {
    if ( config.headers ) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem( USER_LS_KEY ) || '';
    }
    return config;
} );
