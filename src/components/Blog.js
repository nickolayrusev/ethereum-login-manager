import React from 'react';
import Post from './Post/Post'

const Blog = ({posts, onAddComment}) => <div className={'row'}>
    {posts.map((p, i) => <Post key={i} {...p} onAddComment={onAddComment} />)}
</div>;

export default Blog;
