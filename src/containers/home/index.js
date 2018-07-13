import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts, addComment} from "../../modules/blog";
import Blog from '../../components/Blog'

class Home extends Component {
    constructor(props) {
        super(props)
        this.onAddComment = this.onAddComment.bind(this);
    }

    componentWillMount() {
        this.props.fetchPosts()
    }

    onAddComment(p, c) {
        this.props.addComment(p,c)
    }

    render() {
        const {posts, isAuthenticated} = this.props;
        return <div>
            <h1>Home</h1>
            <Blog posts={posts} isAuthenticated={isAuthenticated} onAddComment={this.onAddComment}/>
        </div>
    }
}

const mapStateToProps = state => ({
    posts: state.blog.posts,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/about-us'),
            fetchPosts: () => fetchPosts(),
            addComment: (post, comment) => addComment(post, comment)
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
