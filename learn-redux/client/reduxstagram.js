// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main'; // no need to put .js at the end
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React-Router deps
import { Router, Route, IndexRoute, hashHistory } from 'react-router'; // browserHistory will get replaced by Redux
import { Provider } from 'react-redux';
import store, { history } from './store'     // for default export no need of curly braces

const router = (
    <Provider store={store}> 
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)


render(router, document.getElementById('root'));