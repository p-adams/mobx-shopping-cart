import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './stores/store'
import {Provider} from 'mobx-react'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
