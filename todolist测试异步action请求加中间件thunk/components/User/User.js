import React, { Component } from 'react'
import './User.css'

// import heading from './muwu.jpg';
import headimg from '../../assets/img/headimg.png'
 
class User extends Component {
  logout(){
    //  求后端 删cookie ->返回结果 -> 前端跳转 this.props.history.push(...
    }
  render() {
    return (
      // <>
      <div className="User-content">
      <div className="User-header">
        <h2><img src={headimg} alt=""/></h2>
        <div className="user-box">
          <a href="javascript:;">{this.props.data.username}</a>
          <a onClick={this.logout.bind(this)}>注销</a>
        </div>
 
      </div>
      <div className="new-mine-title"><a href="#"><span className="icon iconfont icon-quanbudingdan"></span>全部订单</a></div>
      <ul className="new-min-title-list">
            <li><a href="new-mine-order.html"><span className="icon iconfont icon-daishenhe"></span>待审核</a></li>
            <li><a href="new-mine-order1.html"><span className="icon iconfont icon-daifahuo"></span>待发货</a></li>
            <li><a href="new-mine-order2.html"><span className="icon iconfont icon-daishouhuo"></span>待收货</a></li>
          </ul>
      <div className="new-mine-title"><a href="new-mine-order3.html"><span className="icon iconfont icon-xiaoshou"></span>我的店铺</a></div>
      <ul className="new-min-title-list">
            <li><a href="new-mine-order4.html"><span className="icon iconfont icon-iconpay2"></span>待销售</a></li>
            <li><a href="new-mine-order5.html"><span className="icon iconfont icon-daijiesuan"></span>待结算</a></li>
            <li><a href="new-mine-order6.html"><span className="icon iconfont icon-yijiesuan"></span>已结算</a></li>
            <li><a href="new-mine-order7.html"><span className="icon iconfont icon-huaduo"></span>退款售后</a></li>
          </ul>
      <ul className="mui-table-view">
            <li className="mui-table-view-cell">
              <a href="new-my-news.html" className="mui-navigate-right">
                我的消息
						</a>
            </li>
            <li className="mui-table-view-cell">
              <a href="new-address.html" className="mui-navigate-right">
                地址管理
						</a>
            </li>
            <li className="mui-table-view-cell">
              <a className="mui-navigate-right">
                联系客服
						</a>
            </li>
          </ul> 
    </div>

    )
  }
}
export default User;