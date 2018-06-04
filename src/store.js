import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import {composeWithDevTools} from 'redux-devtools-extension'
import throttle from 'lodash/throttle';
import {loadState, saveState} from "./localStorage";

export const history = createHistory()

const posts = [{
    id: 1,
    title: 'happy young friends',
    content: 'travel with your friends',
    image: 'images/back-view-happy-young-friends-260nw-531881617.jpg',
    comments: []
}, {
    id: 2,
    title: 'next level of everyyhing',
    content: 'travel with your friends',
    image: 'images/female-hand-holding-passport-over-260nw-1021339972.jpg',
    comments: []
}, {
    id: 3,
    title: 'fortunate couple driving',
    content: 'travel with your friends',
    image: 'images/happy-couple-driving-on-country-260nw-305567459.jpg',
    comments: []
}, {
    id: 4,
    title: 'happy woman traveler',
    content: 'travel with your friends',
    image: 'images/happy-woman-traveler-bikini-relaxing-260nw-643556467.jpg',
    comments: []
}, {
    id: 5,
    title: 'happy family on the beach',
    content: 'travel with your friends',
    image: 'images/happy-family-on-beach-people-260nw-646759516.jpg',
    comments: []
}, {
    id: 6,
    title: 'young hipster friends on road',
    content: 'travel with your friends',
    image: 'images/young-hipster-friends-on-road-260nw-293827457.jpg',
    comments: []
}];

const initialState = () => {
    const initial = loadState()
    console.log('initial', initial)
    if (!initial) {
        return {blog: {posts}}
    } else {
        return initial
    }
};

const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState(),
    composedEnhancers
)

store.subscribe(throttle(() => {
    console.log('subscribe...')
    saveState({blog: store.getState().blog} )
}, 1000));

export default store
