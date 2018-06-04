import React from 'react';
import Post from './Post/Post'

const Blog = ({posts, onCommentAdd}) => <div>
    {posts.map((p, i) => <Post key={i} {...p} onCommentAdd={onCommentAdd} />)}
</div>;

export default Blog;
