import { OrderEnum, PostListViewModeEnum, PostSortFieldEnum, PostViewSwitcher } from 'entities/Post';
import { getPostsFilterOrder, getPostsFilterSearchQuery, getPostsFilterSort, getPostsFilterTag, postsFiltersActions } from 'features/PostsFilters';
import { fetchPosts, postsPageActions } from 'pages/PostsPage';
import { getPostsPageViewMode } from 'pages/PostsPage/model/selectors/postsPageSelectors';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDebounce } from 'shared/hooks/useDebounce';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { Select, SelectOptions } from 'shared/ui/Select';
import { Tabs, TabType } from 'shared/ui/Tabs/ui/Tabs';
// styles
import classes from './PostsFilters.module.scss';

export interface PostsFiltersProps {
    className?: string;
}

export const PostsFilters: React.FC<PostsFiltersProps> = memo( ( { className } ) => {
    const { t } = useTranslation();
    // redux hooks
    const dispatch = useAppDispatch();
    const viewMode = useSelector( getPostsPageViewMode );
    const sort = useSelector( getPostsFilterSort );
    const order = useSelector( getPostsFilterOrder );
    const searchQuery = useSelector( getPostsFilterSearchQuery );
    const selectedValue = `${ order }_${ sort }`;
    const tag = useSelector( getPostsFilterTag );

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

    const onTabCklicHandler = useCallback(
        ( value: string ) => {
            return () => {
                dispatch( postsFiltersActions.setTag( value ) );
            };
        },
        [
            dispatch
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

    const tags = useMemo<TabType[]>(
        () => [
            {
                label: 'All',
                content: t( 'ALL' ),
            },
            {
                label: 'IT',
                content: t( 'IT' ),
            },
            {
                label: 'Web',
                content: t( 'WEB' ),
            },
            {
                label: 'Design',
                content: t( 'DESIGN' ),
            },

            {
                label: 'Business',
                content: t( 'BUSINESS' ),
            },
            {
                label: 'Other',
                content: t( 'OTHER' ),
            },
        ],
        [
            t
        ]
    );

    return (
        <div
            className={ classNames(
                classes.PostsFilters,
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
            <Tabs
                className={ classes.tabs }
                tabs={ tags }
                value={ tag }
                onTabClick={ onTabCklicHandler( tag ) } />
        </div>
    );
} );
