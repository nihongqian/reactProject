import React from 'react';
import ReactDOM from 'react-dom';


import './assets/css/app.css'
import './assets/css/mui.min.css'

import './assets/css/iconfont.css'
import './assets/css/icons-extra.css'
import './library/font';
import App from "./components/App";
import {BrowserRouter,Route} from 'react-router-dom';

import store from './components/store/index';
import {Provider} from 'react-redux';
import ToDoList from './components/ToDoList/ToDoList';


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <Route component={App}/>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={store}>
//         <ToDoList/>
//     </Provider>
//     ,
//     document.getElementById('root')
// )