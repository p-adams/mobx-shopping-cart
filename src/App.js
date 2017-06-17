import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import {inject, observer} from 'mobx-react'
import './App.css';

const App = inject("store")(observer (class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.store.getItems.map((item, index) => {
          return <div key={index}>{item.item}</div>
        })}
        <DevTools/>
      </div>
    );
  }
}))

export default App;
