import React from 'react';
import Post from './Post/Post'

const Blog = ({posts}) => <div className={'row'}>
    {posts.map((p, i) => <Post key={i} {...p} />)}
</div>;

export default Blog;
