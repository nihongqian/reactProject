import React, { Component } from 'react'

import './Car.css'


class Car extends Component {

  render() {
    return (
      <>
        <header className="mui-bar mui-bar-nav">
          <a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onClick={()=>this.props.history.go(-1)}></a>
          <h1 className="mui-title">购物车</h1>
          <a className="rig_shai" id="rem_s" href="javascript:void(0)" >编辑</a>
        </header>
        <div style={{"height":"44px"}}></div>
        <form method="post" name="cart_form" target="_self" id="cart_form" action="">
          <div className="commodity_list_box">
            <div className="commodity_box">
              <div className="commodity_list">
                <ul className="commodity_list_term">
                  <li className="select">
                    <em aem="0" cart_id="84"></em>
                    <img src="../images/list-ph01.png" />
                    <div className="div_center">
                      <h4>超级大牌品牌服装，现在买只要998</h4>
                      <span>颜色:<label className="mr-6">经典绮丽款</label>尺寸:<label>L</label></span>
                      <p className="now_value"><i>￥</i><b className="qu_su">120.00</b></p>
                    </div>
                    <div className="div_right">
                      <i>-</i>
                      <span className="zi">1</span>
                      <input type="hidden" value="84"/>
                      <i>+</i>
                    </div>
                  </li>
                  <li className="select">
                    <em aem="0" cart_id="84"></em>
                    <img src="../images/list-ph01.png" />
                    <div className="div_center">
                      <h4>超级大牌品牌服装，现在买只要998</h4>
                      <span>50斤</span>
                      <p className="now_value"><i>￥</i><b className="qu_su">10.00</b></p>
                    </div>
                    <div className="div_right">
                      <i>-</i>
                      <span className="zi">1</span>
                      <input type="hidden" value="84"/>
                      <i>+</i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{"height":"55px"}}></div>
          <div className="settle_box">
            <ul className="all_check select">
              <li><span id="all_pitch_on"></span>
                <div>全选</div>
              </li>
            </ul>
            <ul className="total_amount">
              <li style={{"display": "flex"}}>合计：<p id="total_price">¥<b>0</b></p>
              </li>
              <li style={{"display": "flex"}}>
                <a className="settle_btn" id="confirm_cart">结算</a>
              </li>
            </ul>
          </div>
        </form>
      </>
    )
  }
}
export default Car;