import { ContentText, PostContentTypeEnum, PostListViewModeEnum, PostType } from 'entities/Post/model/types/PostType';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/utility/UtilityMethods';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonThemeEnum } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';
import ViewsIcon from '../../../../shared/assets/icons/eye-20-20.svg';
import { PostTextBlock } from '../PostBlocks/PostTextBlock/PostTextBlock';

// styles
import { AppLink } from 'shared/ui/AppLink';
import classes from './PostListItem.module.scss';

export interface PostListItemProps {
    post: PostType;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
    viewMode?: PostListViewModeEnum;
}

export const PostListItem: React.FC<PostListItemProps> = memo( ( { post, target, viewMode, className } ) => {
    const { t } = useTranslation( 'post' );
    const textBlock = post.content.find( block => block.type === PostContentTypeEnum.TEXT ) as ContentText;

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
                <AppLink
                    target={ target }
                    to={ RoutesPath.postDetail + post.id }>
                    <Card className={ classes.card }>
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
                </AppLink>
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
                    {textBlock ? <PostTextBlock
                        className={ classes.textBlock }
                        content={ textBlock } /> : null}
                    <div className={ classes.footer }>
                        <AppLink
                            target={ target }
                            to={ RoutesPath.postDetail + post.id }>
                            <Button theme={ ButtonThemeEnum.OUTLINE }>{t( 'READ_MORE' )}</Button>
                        </AppLink>
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
