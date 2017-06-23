import React from 'react';
import ReactDOM from 'react-dom';
import Store from './stores/store'
import {Provider} from 'mobx-react'
import App from './App';
const store = new Store()
const cartStore = store.cartStore

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider cartStore={cartStore}><App /></Provider>, div);
});
