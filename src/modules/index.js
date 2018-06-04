import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blog from './blog';

export default combineReducers({
    router: routerReducer,
    blog
});
