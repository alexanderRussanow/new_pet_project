import { PostViewSwitcher, PostListViewModeEnum, PostSortFieldEnum, OrderEnum } from 'entities/Post';
import { getPostsFilterOrder, getPostsFilterSearchQuery, getPostsFilterSort, postsFiltersActions } from 'features/PostsFilters';
import { fetchPosts } from 'pages/PostsPage';
import { getPostsPageViewMode } from 'pages/PostsPage/model/selectors/postsPageSelectors';
import { postsPageActions } from 'pages/PostsPage/model/slice/postsPageSlice';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDebounce } from 'shared/hooks/useDebounce';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { Select, SelectOptions } from 'shared/ui/Select';
// styles
import classes from './PostsPageFilters.module.scss';

export interface PostPageFiltersProps {
    className?: string;
}

export const PostPageFilters: React.FC<PostPageFiltersProps> = memo( ( { className } ) => {
    const { t } = useTranslation();
    // redux hooks
    const dispatch = useAppDispatch();
    const viewMode = useSelector( getPostsPageViewMode );
    const sort = useSelector( getPostsFilterSort );
    const order = useSelector( getPostsFilterOrder );
    const searchQuery = useSelector( getPostsFilterSearchQuery );
    const selectedValue = `${ order }_${ sort }`;

    const viewModeToggle = useCallback(
        ( view: PostListViewModeEnum ) => {
            dispatch( postsPageActions.setViewMode( view ) );
        },
        [
            dispatch
        ]
    );

    const fetchData = useCallback(
        () => {
            dispatch( fetchPosts( { replace: true } ) );
        },
        [
            dispatch
        ] 
    );

    const debouncedFetch = useDebounce(
        fetchData,
        500 
    );

    const onFilterChange = useCallback(
        ( value: string ) => {
            dispatch( postsFiltersActions.setFilters( value ) );
            dispatch( postsPageActions.setPageNumber( 1 ) );
            fetchData();
        },
        [
            dispatch,
            fetchData
        ]
    );

    const onSearchQueryChange = useCallback(
        ( value: string ) => {
            dispatch( postsFiltersActions.setSearchQuery( value ) );
            dispatch( postsPageActions.setPageNumber( 1 ) );
            debouncedFetch();
        },
        [
            dispatch,
            debouncedFetch
        ]
    );

    const sortOptions = useMemo<SelectOptions[]>(
        () => [
            {
                value: `${ OrderEnum.ASC }_${ PostSortFieldEnum.DATE }`,
                label: t( 'SORT_BY_DATE_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostSortFieldEnum.DATE }`,
                label: t( 'SORT_BY_DATE_DESC' ),
            },
            {
                value: `${ OrderEnum.ASC }_${ PostSortFieldEnum.TITLE }`,
                label: t( 'SORT_BY_TITLE_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostSortFieldEnum.TITLE }`,
                label: t( 'SORT_BY_TITLE_DESC' ),
            },
            {
                value: `${ OrderEnum.ASC }_${ PostSortFieldEnum.VIEWS }`,
                label: t( 'SORT_BY_VIEWS_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostSortFieldEnum.VIEWS }`,
                label: t( 'SORT_BY_VIEWS_DESC' ),
            },
            {
                value: `${ OrderEnum.ASC }_${ PostSortFieldEnum.LIKES }`,
                label: t( 'SORT_BY_LIKES_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostSortFieldEnum.LIKES }`,
                label: t( 'SORT_BY_LIKES_DESC' ),
            },
        ],
        [
            t
        ]
    );

    return (
        <div
            className={ classNames(
                classes.PostPageFilters,
                {},
                [
                    className
                ] 
            ) }>
            <div className={ classes.filtersWrapper }>
                <Select
                    label={ t( 'SORT_BY' ) }
                    options={ sortOptions }
                    value={ selectedValue }
                    onChange={ onFilterChange } />
                <PostViewSwitcher
                    className={ classes.viewToggle }
                    viewMode={ viewMode }
                    onViewModeChange={ viewModeToggle } />
            </div>
            <Card className={ classes.searchLine }>
                <Input
                    placeholder={ t( 'SEARCH' ) }
                    value={ searchQuery }
                    onChange={ onSearchQueryChange } />
            </Card>
        </div>
    );
} );
