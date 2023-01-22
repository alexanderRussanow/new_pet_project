import { PostList } from 'entities/Post';
import { getPostsPageIsLoading, getPostsPagePosts, getPostsPageViewMode } from 'pages/PostsPage';
import { useSelector } from 'react-redux';

export interface PostInfiniteListProps {
    className?: string;
}

export const PostInfiniteList: React.FC<PostInfiniteListProps> = ( { className } ) => {
    // redux hooks
    const postsList = useSelector( getPostsPagePosts.selectAll );
    const isLoading = useSelector( getPostsPageIsLoading );
    const viewMode = useSelector( getPostsPageViewMode );

    return <PostList
        className={ className }
        isLoading={ isLoading }
        posts={ postsList }
        viewMode={ viewMode } />;
};
