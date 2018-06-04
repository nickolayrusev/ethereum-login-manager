export const FETCH_POSTS = 'blog/FETCH_POSTS';
export const FETCH_POSTS_FINISHED = 'blog/FETCH_POSTS_FINISHED';

const posts = [{
    title: 'happy young friends',
    content: 'travel with your friends',
    image: 'images/back-view-happy-young-friends-260nw-531881617.jpg',
    comments:[]
}, {
    title: 'next level of everyyhing',
    content: 'travel with your friends',
    image: 'images/female-hand-holding-passport-over-260nw-1021339972.jpg',
    comments:[]
},
//     {
//     title: 'fortunate couple driving',
//     content: 'travel with your friends',
//     image: 'images/happy-couple-driving-on-country-260nw-305567459.jpg',
//     comments:[]
// },
//     {
//     title: 'happy woman traveler',
//     content: 'travel with your friends',
//     image: 'images/happy-woman-traveler-bikini-relaxing-260nw-643556467.jpg',
//     comments:[]
// },
//     {
//     title: 'happy family on the beach',
//     content: 'travel with your friends',
//     image: 'images/happy-family-on-beach-people-260nw-646759516.jpg',
//     comments:[]
// },
    {
    title: 'young hipster friends on road',
    content: 'travel with your friends',
    image: 'images/young-hipster-friends-on-road-260nw-293827457.jpg',
    comments:[]
}];

const initialState = {
    posts
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
                posts: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
};

export const fetchPosts = () => {
    return dispatch => {
        dispatch({
            type: FETCH_POSTS
        });

        dispatch({
            type: FETCH_POSTS_FINISHED,
            payload: posts
        });
    };
};

