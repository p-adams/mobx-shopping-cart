import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './stores/store'
import {Provider} from 'mobx-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin'

import './index.css';

const store = new Store()
const cartStore = store.cartStore
const inventoryStore = store.inventoryStore
injectTapEventPlugin()
ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Provider
                        cart={cartStore}
                        inventory={inventoryStore}
                    >
                    <App/>
                </Provider>
                </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
