import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import App from './App';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51HdMs9HOAxUNfXshPhVqx5DaOR8u481inkzpmMVM7MEJLkj98gwzi441XDhamgHFg1s3DckjCwsbqQfQhqB7LZb800O7RC4osH");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <BrowserRouter>   
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

