import React from 'react';
import Post from './Post/Post'

const posts = [{
    title: 'happy young friends',
    content: 'travel with your friends',
    image: 'images/back-view-happy-young-friends-260nw-531881617.jpg'
}, {
    title: 'next level of everyyhing',
    content: 'travel with your friends',
    image: 'images/female-hand-holding-passport-over-260nw-1021339972.jpg'
}, {
    title: 'fortunate couple driving',
    content: 'travel with your friends',
    image: 'images/happy-couple-driving-on-country-260nw-305567459.jpg'
}, {
    title: 'happy woman traveler',
    content: 'travel with your friends',
    image: 'images/happy-woman-traveler-bikini-relaxing-260nw-643556467.jpg'
}, {
    title: 'happy family on the beach',
    content: 'travel with your friends',
    image: 'images/happy-family-on-beach-people-260nw-646759516.jpg'
}, {
    title: 'young hipster friends on road',
    content: 'travel with your friends',
    image: 'images/young-hipster-friends-on-road-260nw-293827457.jpg'
}];

const Blog = () => <div className={'row'}>
    {posts.map((p, i) => <Post key={i} {...p} />)}
</div>;

export default Blog;


