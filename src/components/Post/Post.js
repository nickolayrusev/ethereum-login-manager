import React, {Component} from 'react';
import './Post.css';

class Post extends Component {

    constructor(props) {
        super(props);
        this.onAddComment = this.onAddComment.bind(this);
    }

    onAddComment() {
        const {id} = this.props;
        const comment = this.comment.value
        this.props.onAddComment({id}, comment)
        this.resetComment()
    }

    resetComment() {
        this.comment.value = '';
    }

    render() {
        const {id, title, image, content, comments, isAuthenticated} = this.props;
        return <div className="col-xs-12 col-sm-4">
            <div className="card">
                <a className="img-card">
                    <img src={image}/>
                </a>
                <div className="card-content">
                    <h4 className="card-title">
                        <a>{title}</a>
                    </h4>
                    <p className="">
                        {content}
                    </p>
                </div>
                <div className="card-read-more">
                    <a href="#"
                       className="btn btn-link btn-block">
                        Read More
                    </a>
                </div>
                {isAuthenticated && <div className={'comment-wrapper inner-addon right-addon'}>
                    <i aria-hidden={'true'} className="glyphicon glyphicon-comment" onClick={this.onAddComment}/>
                    <input type={'text'} ref={(comment) => this.comment = comment} placeholder={'comment...'}/>
                </div>}
                <div className={'card-content'}>
                    {comments.map(c => <p>{c}</p>)}
                </div>
            </div>
        </div>
    }
}


export default Post;
