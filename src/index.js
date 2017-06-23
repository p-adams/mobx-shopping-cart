import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './stores/store'
import {Provider} from 'mobx-react'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = new Store()
const cartStore = store.cartStore

ReactDOM.render(<Provider cartStore={cartStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
