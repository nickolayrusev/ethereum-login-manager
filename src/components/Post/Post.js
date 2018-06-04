import React from 'react';
import './Post.css';

const Post = ({id, title, image, content, comments, onCommentAdd}) => (<div className="col-xs-12 col-sm-4">
    <div className="card">
        <a className="img-card">
            <img src={image} />
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
            <i aria-hidden={'true'} className="glyphicon glyphicon-comment" onClick={(e)=>{console.log('clicked', e); onCommentAdd(1,'hi') }}/>
            <input type={'text'} placeholder={'comment...'} />
        </div>
        <div>
            {comments.map(c=>c)}
        </div>
    </div>
</div>);

export default Post;
