import React from 'react';
import ReactDOM from 'react-dom';


import './assets/css/app.css'
import './assets/css/mui.min.css'

import './assets/css/iconfont.css'
import './assets/css/icons-extra.css'
import './library/font';
import App from "./components/App";
import {BrowserRouter,Route} from 'react-router-dom';

let root = {
    bNav:true,
    bFoot:true,
    bLoading:false
  };

ReactDOM.render(

        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>

    ,
    document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={store}>
//         <ToDoList/>
//     </Provider>
//     ,
//     document.getElementById('root')
// )