import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-rotuer-redux';
import { hashHistory } from 'react-router';

// import the root reducer

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data

const defaultState = {
    posts, 
    comments
};

const store = createStore(rootReducer, defaultState);


export const history = syncHistoryWithStore(hashHistory, store);

export default store;