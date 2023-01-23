import { PostsList } from 'entities/Post';
import { getPostsPageIsLoading, getPostsPageViewMode } from '../../model/selectors/postsPageSelectors';
import { getPostsPagePosts } from '../../model/slice/postsPageSlice';
import { useSelector } from 'react-redux';

export interface PostInfiniteListProps {
    className?: string;
}

export const PostInfiniteList: React.FC<PostInfiniteListProps> = ( { className } ) => {
    // redux hooks
    const postsList = useSelector( getPostsPagePosts.selectAll );
    const isLoading = useSelector( getPostsPageIsLoading );
    const viewMode = useSelector( getPostsPageViewMode );

    return <PostsList
        className={ className }
        isLoading={ isLoading }
        posts={ postsList }
        viewMode={ viewMode } />;
};
