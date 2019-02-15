import React,{Component} from 'react'

import Header from "../common/Header/Header";
import Home from "./Home/Home";
import Footer from "../common/Footer/Footer";
import Error from "../common/Error/Error";

import Detail from "./Detail/Detail";
import Follow from "./Follow/Follow";
import Car from "./Car/Car";
import Classify from "./Classify/Classify";
import User from "./User/User";
import Login from "./Login/Login";
import Reg from "./Reg/Reg";


import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from "../guard/Auth";
import Loading from "../common/Loading/Loading";
import pubsub from 'pubsub-js';

class App extends Component{

  constructor(){
    super();

    this.state={
      bNav:true,
      bFoot:true,
      bLoading:false
    };

    //订阅loading请求
    pubsub.subscribe('view_loading',(mess,bl)=>{
      this.setState({bLoading:bl})
    })
  }
  componentWillReceiveProps(nextProps){

    // console.log(nextProps.location.pathname);

    //监听路由
    let path = nextProps.location.pathname;

    if (/home|follow/.test(path)){
      this.setState({bNav:true,bFoot:true})
    }
    if (/user/.test(path)){
      this.setState({bNav:false,bFoot:true})
    }
    if (/login|reg|detail/.test(path)){
      this.setState({bNav:false,bFoot:false})
    }

  }
  render(){
    return (
      <>
              {this.state.bLoading && <Loading/>}
              {this.state.bNav && <Header/>}  
        <Switch>
          <Route path='/home' component={Home} />
          <Route path="/follow" component={Follow} />
          <Route path='/classify' component={Classify} />
          <Route path='/car' component={Car} />
          {/* <Route path='/user' component={User} /> */}
          <Auth path="/user" component={User} />

          <Route path='/login' component={Login} />
          <Route path='/reg' component={Reg} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect exact from='/' to='/home' />
          <Route component={Error} />
        </Switch>

        {this.state.bFoot && <Footer/>}
        
      </>
    )
  }
}
export default App;