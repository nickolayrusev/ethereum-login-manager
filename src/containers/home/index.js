import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts, addComment} from "../../modules/blog";
import Blog from '../../components/Blog'

class Home extends Component {
    constructor(props) {
        super(props)
        this.onCommentAdd = this.onCommentAdd.bind(this);
    }

    componentWillMount() {
        this.props.fetchPosts()
    }

    onCommentAdd() {
        console.log('add')
        this.props.addComment({id:1},'hi')
    }

    render() {
        const {posts} = this.props;

        return <div>
            <h1>Home</h1>
            <Blog posts={posts} onCommentAdd={this.onCommentAdd}/>
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
            fetchPosts: () => fetchPosts(),
            addComment: (post, comment) => addComment(post, comment)
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
