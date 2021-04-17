import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StateProvider } from './store/StateProvider'
import reducer from './store/reducer/Reducer'
import initialState from './store/reducer/initialState'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
