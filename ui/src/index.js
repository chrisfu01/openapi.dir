import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app/App'

import 'sanitize.css/sanitize.css'

import './assets/css/ionicons.min.css';
import './assets/css/flaticon.css';
import './assets/css/icomoon.css';
import './assets/css/site.css';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)
