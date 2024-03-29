import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import studentsReducer from "./redux/redusers/studentsReduser";
import thynkMiddleware from 'redux-thunk'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const logger = createLogger();
const store = createStore(studentsReducer, applyMiddleware(thynkMiddleware, logger))


ReactDOM.render(<Provider store={store}>
                    <App  />
                </Provider>
                , document.getElementById('root'));

serviceWorker.register();
