// let's go!
import React from 'react';

import { render } from 'react-dom';

import css from './styles/style.styl';

//Import Components
import Main from './components/Main'; // no need to put .js at the end

render(<Main/>, document.getElementById('root'));