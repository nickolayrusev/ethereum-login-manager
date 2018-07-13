import React from 'react';
import Post from './Post/Post'

const Blog = ({posts, onAddComment, isAuthenticated}) => <div className={'row'}>
    {posts.map((p, i) => <Post key={i} {...p} isAuthenticated={isAuthenticated} onAddComment={onAddComment} />)}
</div>;

export default Blog;
