import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {fetchPicsList} from './redux/pictures/api-actions';
import { Router as BrowserRouter } from 'react-router-dom';
import browserHistory from './browser-history';


store.dispatch(fetchPicsList())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
