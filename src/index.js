import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  ReduxPromise from 'redux-promise';
import reducer from "./reducers/index";

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render( 
    <Provider store = {store(reducer)} >
        <App />
    </Provider>
    , document.getElementById('root'));
