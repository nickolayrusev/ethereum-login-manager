import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from "../../modules/blog";
import Blog from '../../components/Blog'

class Home extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    render() {
        const {posts} = this.props;

        return <div>
            <h1>Home</h1>
            <Blog posts={posts} />
        </div>
    }
}

const mapStateToProps = state => ({
    posts: state.blog.posts,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/about-us'),
            fetchPosts: () => fetchPosts()
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
