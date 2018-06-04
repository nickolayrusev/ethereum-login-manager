export const FETCH_POSTS = 'blog/FETCH_POSTS';
export const FETCH_POSTS_FINISHED = 'blog/FETCH_POSTS_FINISHED';
export const ADD_COMMENT = 'blog/ADD_COMMENT';

const initialState = {
    // posts
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_POSTS_FINISHED:
            return {
                ...state,
                // posts: action.payload,
                isLoading: false
            };
        case ADD_COMMENT : {
            const {post, comment} = action.payload;
            const posts = state.posts.map(p => {
                if (p.id === post.id) {
                    let comments = p.comments;
                    p.comments = [...comments, comment]
                }
                return p
            });

            return {
                ...state,
                posts
            }
        }
        default:
            return state;
    }
};

export const fetchPosts = () => {
    return (dispatch, getState) => {
        dispatch({
            type: FETCH_POSTS
        });

        dispatch({
            type: FETCH_POSTS_FINISHED,
            posts: getState().blog.posts
        });
    };
};

export const addComment = (post, comment) => {
    return dispatch => {
        dispatch({
            type: ADD_COMMENT,
            payload: {post, comment}
        });
    };

};
