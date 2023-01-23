import { OrderEnum, PostsListViewModeEnum, PostsSortFieldEnum, PostTags, PostViewSwitcher } from 'entities/Post';
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
import { Row, Column } from 'shared/ui/Layout';
import { Select, SelectOptions } from 'shared/ui/Select';
import { Tabs, TabType } from 'shared/ui/Tabs';

export interface PostsFiltersProps {
    className?: string;
}

export const PostsFilters: React.FC<PostsFiltersProps> = memo( ( { className } ) => {
    const { t } = useTranslation( 'post' );
    // redux hooks
    const dispatch = useAppDispatch();
    const viewMode = useSelector( getPostsPageViewMode );
    const sort = useSelector( getPostsFilterSort );
    const order = useSelector( getPostsFilterOrder );
    const searchQuery = useSelector( getPostsFilterSearchQuery );
    const selectedValue = `${ order }_${ sort }`;
    const tag = useSelector( getPostsFilterTag );

    const viewModeToggle = useCallback(
        ( view: PostsListViewModeEnum ) => {
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
        ( value: TabType ) => {
            dispatch( postsFiltersActions.setTag( value.label as PostTags ) );
            dispatch( postsPageActions.setPageNumber( 1 ) );
            fetchData();
        },
        [
            dispatch,
            fetchData
        ]
    );

    const sortOptions = useMemo<SelectOptions[]>(
        () => [
            {
                value: `${ OrderEnum.ASC }_${ PostsSortFieldEnum.DATE }`,
                label: t( 'SORT_BY_DATE_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostsSortFieldEnum.DATE }`,
                label: t( 'SORT_BY_DATE_DESC' ),
            },
            {
                value: `${ OrderEnum.ASC }_${ PostsSortFieldEnum.TITLE }`,
                label: t( 'SORT_BY_TITLE_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostsSortFieldEnum.TITLE }`,
                label: t( 'SORT_BY_TITLE_DESC' ),
            },
            {
                value: `${ OrderEnum.ASC }_${ PostsSortFieldEnum.VIEWS }`,
                label: t( 'SORT_BY_VIEWS_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostsSortFieldEnum.VIEWS }`,
                label: t( 'SORT_BY_VIEWS_DESC' ),
            },
            {
                value: `${ OrderEnum.ASC }_${ PostsSortFieldEnum.LIKES }`,
                label: t( 'SORT_BY_LIKES_ASC' ),
            },
            {
                value: `${ OrderEnum.DESC }_${ PostsSortFieldEnum.LIKES }`,
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
        <Column
            align='start'
            gap='small'
            className={ classNames(
                'PostsFilters',
                {},
                [
                    className
                ] 
            ) }
            width100>
            <Row
                justify='between'
                width100>
                <Select
                    label={ t( 'SORT_BY' ) }
                    options={ sortOptions }
                    value={ selectedValue }
                    onChange={ onFilterChange } />
                <PostViewSwitcher
                    viewMode={ viewMode }
                    onViewModeChange={ viewModeToggle } />
            </Row>
            <Card style={ { width: '100%' } }>
                <Input
                    placeholder={ t( 'SEARCH' ) }
                    value={ searchQuery }
                    onChange={ onSearchQueryChange } />
            </Card>
            <Tabs
                tabs={ tags }
                value={ tag }
                onTabClick={ onTabCklicHandler } />
        </Column>
    );
} );
