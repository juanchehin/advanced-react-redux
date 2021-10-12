import { combineReducers } from 'react';
import commentsReducers from '../reducers/comments';

export default combineReducers({
    comments: commentsReducers
});