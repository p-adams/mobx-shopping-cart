import React from 'react';
import ReactDOM from 'react-dom';
import Store from './stores/store'
import {Provider} from 'mobx-react'
import App from './App';

const store = new Store()
const cartStore = store.cartStore
const inventoryStore = store.inventoryStore


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider cart={cartStore} inventory={inventoryStore}><App /></Provider>, div);
});
