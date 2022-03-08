import { combineReducers } from 'react';
import commentsReducers from '../../src/reducers/comments';

export default combineReducers({
    comments: commentsReducers
});