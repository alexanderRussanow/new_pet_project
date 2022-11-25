import { USER_LS_KEY } from 'shared/const/localStorage';
import axios from 'axios';

export const API = axios.create( {
    baseURL: __API__,
    headers: {
        authorization: 'Bearer ' + localStorage.getItem( USER_LS_KEY ),
    },
} );
