import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//---------------------------------------------
import {Provider} from 'react-redux'
import store from './Redux/store.js'
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

axios.defaults.baseURL = process.env.URL_SERVER_API || 'http://localhost:3001';

console.log(process.env.URL_SERVER_API)
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>  
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
