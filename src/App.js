import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import {inject, observer} from 'mobx-react'
import AppBarComponent from './AppBarComponent'
import ProductDisplay from './ProductDisplay'
import CartDisplay from './CartDisplay'
import './App.css';


const App = inject('cart')(observer (class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBarComponent/>
        <CartDisplay/>
        <ProductDisplay/>
        <DevTools/>
      </div>
    );
  }
}))

export default App;
