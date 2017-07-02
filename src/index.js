import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './prism';
import 'prismjs/themes/prism-okaidia.css';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();
