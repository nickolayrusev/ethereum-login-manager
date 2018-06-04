import React, {Component} from 'react';
import './Post.css';

// ({id, title, image, content, comments, onCommentAdd})
class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {comment: ''};
        this.onAddComment = this.onAddComment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onAddComment() {
        const {id} = this.props;
        const {comment} = this.state;
        this.props.onAddComment({id}, comment)
    }

    handleChange(event) {
        this.setState({comment: event.target.value});
    }

    render() {
        const {id, title, image, content, comments} = this.props;
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
                <div className={'comment-wrapper inner-addon right-addon'}>
                    <i aria-hidden={'true'} className="glyphicon glyphicon-comment" onClick={this.onAddComment}/>
                    <input type={'text'} onChange={this.handleChange} placeholder={'comment...'}/>
                </div>
                <div>
                    {comments.map(c => c)}
                </div>
            </div>
        </div>
    }
}


export default Post;
