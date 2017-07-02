import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();
