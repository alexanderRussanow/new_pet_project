import { ContentText, PostContentTypeEnum, PostListViewModeEnum, PostType } from 'entities/Post/model/types/PostType';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';
import ViewsIcon from '../../../../shared/assets/icons/eye-20-20.svg';
import { PostTextBlock } from '../PostBlocks/PostTextBlock/PostTextBlock';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

// styles
import classes from './PostListItem.module.scss';

export interface PostListItemProps {
    post: PostType;
    className?: string;
    viewMode?: PostListViewModeEnum;
}

export const PostListItem: React.FC<PostListItemProps> = memo( ( { post, viewMode, className } ) => {
    const { t } = useTranslation( 'post' );
    const navigate = useNavigate();

    const textBlock = post.content.find( block => block.type === PostContentTypeEnum.TEXT ) as ContentText;

    const onPostOpen = useCallback(
        () => {
            navigate( RoutesPath.postDetail + post.id );
        },
        [
            post.id,
            navigate
        ] 
    );

    return (
        <div
            className={ classNames(
                classes.PostListItem,
                {},
                [
                    className,
                    classes[ viewMode as string ]
                ] 
            ) }>
            {viewMode === PostListViewModeEnum.GRID ? (
                <Card>
                    <div className={ classes.imgWrapper }>
                        <img
                            alt={ post.title }
                            className={ classes.img }
                            src={ post.img } />
                        <Text
                            className={ classes.date }
                            content={ post.date } />
                    </div>
                    <div className={ classes.infoWrapper }>
                        <Text
                            className={ classes.tags }
                            content={ post.tags.join( ', ' ) } />
                        <Text
                            className={ classes.views }
                            content={ String( post.views ) } />
                        <Icon Svg={ ViewsIcon } />
                    </div>
                    <Text
                        className={ classes.title }
                        title={ post.title } />
                </Card>
            ) : (
                <Card className={ classes.card }>
                    <div className={ classes.header }>
                        <Avatar
                            size={ 30 }
                            src={ post.user.avatar } />
                        <Text
                            className={ classes.username }
                            content={ post.user.username } />
                        <Text
                            className={ classes.date }
                            content={ post.date } />
                    </div>
                    <Text
                        className={ classes.title }
                        title={ post.title } />
                    <Text
                        className={ classes.tags }
                        content={ post.tags.join( ', ' ) } />
                    <img
                        alt={ post.title }
                        className={ classes.img }
                        src={ post.img } />
                    {textBlock && <PostTextBlock
                        className={ classes.textBlock }
                        content={ textBlock } />}
                    <div className={ classes.footer }>
                        <Button
                            theme={ ButtonThemeEnum.OUTLINE }
                            onClick={ onPostOpen }>
                            {t( 'READ_MORE' )}
                        </Button>
                        <div className={ classes.infoWrapper }>
                            <Text
                                className={ classes.views }
                                content={ String( post.views ) } />
                            <Icon Svg={ ViewsIcon } />
                        </div>
                    </div>
                </Card>
            )}
        </div>
    );
} );
