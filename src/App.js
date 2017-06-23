import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import {inject, observer} from 'mobx-react'
import './App.css';
import ProductDisplay from './ProductDisplay'
import CartDisplay from './CartDisplay'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CartDisplay/>
        <ProductDisplay/>
        <DevTools/>
      </div>
    );
  }
}

export default App;
