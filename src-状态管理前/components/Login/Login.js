import React,{Component} from 'react'
import style from './Login.module.css'
import {Link} from 'react-router-dom'
class Login extends Component{
  render(){
    return (
      <div className={style.content}>
        <p className={style.fhbtn}><a href="javascript:window.history.go(-1);"></a></p>
        <h1></h1>
        <div className={style["login-box"]}>
          <p className={style.lsolid}></p>
          <div className={style.login}>
            <Link to="/login">登录</Link>
            <span></span>
            <Link to="/reg">注册</Link>
          </div>
          <p className={style.lsolid}></p>
        </div>
        <ul>
          <li className={style.lifirst}>
            <input type="text" name="username" value={this.state.username} onChange={this.changeIpt.bind(this)} />
            <span>帐号</span>
          </li>
          <li>
            <input type="text" name="password" value={this.state.password} onChange={(ev)=>this.changeIpt(ev)}/>
            <span>密码</span>
          </li>
        </ul>
        <div className={style.footbox}>
          <input type="button" value="登 录" className={style["login-btn"]} onClick={this.login.bind(this)}/>
          <a href="javascript:;" className={style.tishi}>忘记密码？</a>
        </div>
      </div>
    )
  }
  state={
    username:'',
    password:'',
  };
  changeIpt(ev){
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }
  login(){

    console.log('login',this.state.username,this.state.password);

    fetch(
      // `/data/user.json?username=${this.state.username}&password=${this.state.password}`
      `/data/user.json`
    ).then(
      res=>res.json()
    ).then(
      data=>{
        if (data.auth){
          this.props.history.push({pathname:'/user'})
        } else {
          this.props.history.push({pathname:'/error'})
        }
      }
    )

  }
}
export default Login;