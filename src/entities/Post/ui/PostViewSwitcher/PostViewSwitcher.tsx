import { PostsListViewModeEnum } from 'entities/Post';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import ListIcon from '../../../../shared/assets/icons/list-24-24.svg';
import GridIcon from '../../../../shared/assets/icons/tiled-24-24.svg';
// styles
import classes from './PostViewSwitcher.module.scss';

export interface PostViewSwitcherProps {
    viewMode: PostsListViewModeEnum;
    className?: string;
    onViewModeChange: ( viewMode: PostsListViewModeEnum ) => void;
}

export const PostViewSwitcher: React.FC<PostViewSwitcherProps> = memo( ( { viewMode, onViewModeChange, className } ) => {
    const { LIST, GRID } = PostsListViewModeEnum;
    const listViewMode = viewMode === LIST;

    const handleViewModeChange = useCallback(
        () => {
            onViewModeChange( listViewMode ? GRID : LIST );
        },
        [
            onViewModeChange,
            listViewMode,
            LIST,
            GRID
        ] 
    );

    return (
        <div
            className={ classNames(
                classes.PostViewSwitcher,
                {},
                [
                    className
                ] 
            ) }>
            <Button
                theme={ ButtonThemeEnum.CLEAR }
                onClick={ handleViewModeChange }>
                <Icon
                    Svg={ listViewMode ? GridIcon : ListIcon }
                    className={ classes.icon } />
            </Button>
        </div>
    );
} );
