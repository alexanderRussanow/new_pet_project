import { ContentText, PostContentTypeEnum, PostsListViewModeEnum, PostType } from 'entities/Post';
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
import { AppLink } from 'shared/ui/AppLink';
import { Column, Row } from 'shared/ui/Layout';
// styles
import classes from './PostListItem.module.scss';

export interface PostListItemProps {
    post: PostType;
    target?: HTMLAttributeAnchorTarget;
    className?: string;
    viewMode?: PostsListViewModeEnum;
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
            {viewMode === PostsListViewModeEnum.GRID ? (
                <AppLink
                    target={ target }
                    to={ RoutesPath.postDetail + post.id }>
                    <Card className={ classes.card }>
                        <Column
                            align='start'
                            gap='small'>
                            <Row className={ classes.imgWrapper }>
                                <img
                                    alt={ post.title }
                                    className={ classes.img }
                                    src={ post.img } />
                                <Text
                                    className={ classes.date }
                                    content={ post.date } />
                            </Row>
                            <Row
                                justify='between'
                                width100>
                                <Text
                                    className={ classes.tags }
                                    content={ post.tags.join( ', ' ) } />
                                <Row gap='small'>
                                    <Text content={ String( post.views ) } />
                                    <Icon Svg={ ViewsIcon } />
                                </Row>
                            </Row>
                            <Text
                                className={ classes.title }
                                title={ post.title } />
                        </Column>
                    </Card>
                </AppLink>
            ) : (
                <Card className={ classes.card }>
                    <Column
                        align='start'
                        gap='small'>
                        <Row
                            gap='small'
                            width100>
                            <Avatar
                                size={ 30 }
                                src={ post.user.avatar } />
                            <Text content={ post.user.username } />
                            <Text
                                className={ classes.date }
                                content={ post.date } />
                        </Row>
                        <Text title={ post.title } />
                        <Text content={ post.tags.join( ', ' ) } />
                        <img
                            alt={ post.title }
                            className={ classes.img }
                            src={ post.img } />
                        {textBlock ? <PostTextBlock
                            className={ classes.textBlock }
                            content={ textBlock } /> : null}
                        <Row
                            justify='between'
                            width100>
                            <AppLink
                                target={ target }
                                to={ RoutesPath.postDetail + post.id }>
                                <Button theme={ ButtonThemeEnum.OUTLINE }>{t( 'READ_MORE' )}</Button>
                            </AppLink>
                            <Row gap='small'>
                                <Text content={ String( post.views ) } />
                                <Icon Svg={ ViewsIcon } />
                            </Row>
                        </Row>
                    </Column>
                </Card>
            )}
        </div>
    );
} );
