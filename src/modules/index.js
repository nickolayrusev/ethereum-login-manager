import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blog from './blog';
import auth from './auth';

export default combineReducers({
    router: routerReducer,
    blog,
    auth
});
