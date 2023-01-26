import { getUserAuthData } from '@/entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { getPostData } from '@/entities/Post';

export const getPostEditSelector = createSelector(
    getUserAuthData,
    getPostData,
    ( user, post ) => {
        if ( user && post ) {
            return user.id === post.user.id;
        }
        return false;
    } 
);
