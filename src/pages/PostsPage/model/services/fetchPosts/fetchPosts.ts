import { getPostsFilterTag } from '../../../../../features/PostsFilters/model/selectors/postsFiltersSelectors1';
import { getPostsPagePage } from './../../selectors/postsPageSelectors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PostType } from 'entities/Post/model/types/PostType';
import { getPostsPageLimit } from '../../selectors/postsPageSelectors';
import { getPostsFilterSort, getPostsFilterOrder, getPostsFilterSearchQuery } from 'features/PostsFilters';
import { addQueryParams } from 'shared/ui/URL/addQueryParams';

export interface FetchPostsProps {
    replace?: boolean;
}

export const fetchPosts = createAsyncThunk<PostType[], FetchPostsProps, ThunkConfig<string>>(
    'fetchPosts',
    async ( _, { rejectWithValue, extra, getState } ) => {
        const page = getPostsPagePage( getState() );
        const limit = getPostsPageLimit( getState() );
        const sort = getPostsFilterSort( getState() );
        const order = getPostsFilterOrder( getState() );
        const search = getPostsFilterSearchQuery( getState() );
        const tag = getPostsFilterTag( getState() );

        try {
            addQueryParams( { sort, order, tag, search } );
            const response = await extra.api.get<PostType[]>(
                `/posts`,
                {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                        _sort: sort,
                        _order: order,
                        _tag: tag,
                        q: search,
                    },
                } 
            );

            if ( !response.data ) {
                throw new Error( 'No data' );
            }
            return response.data;
        } catch ( error ) {
            return rejectWithValue( 'Some problems with fetching posts...' );
        }
    }
);
