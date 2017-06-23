import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './stores/store'
import {Provider} from 'mobx-react'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = new Store()
const cartStore = store.cartStore
const inventoryStore = store.inventoryStore

ReactDOM.render(<Provider
                    cart={cartStore}
                    inventory={inventoryStore}
                >
                    <App/>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
