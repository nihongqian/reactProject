import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Detail.css'
import querystring from 'query-string'

import date from '../../api/date';
import fillzero from '../../api/fillzero';

import ReactSwipe from 'react-swipe';
import banner1 from './img/banner1.jpg';
import banner2 from './img/banner2.jpg';

import {connect} from 'react-redux';
import * as types from '../../store/types';
import asyncDetail from '../../store/actions/asyncDetail';

let sT = 0;
class Detail extends Component{

  componentDidMount(){
    let id=this.props.match.params.id-0;
    let dataName=querystring.parse(this.props.location.search).dataName;
    this.props.get(id, dataName)

    window.scrollTo(0,sT)
  }

  componentWillUnmount(){ //卸载前记录位置
    sT = document.documentElement.scrollTop;
  }
  render(){
    let {detail,addItem} = this.props;
    return (
      <>
      <a className="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" onClick={()=>this.props.history.go(-1)}></a>
      <Link to={'/car'}><span className='icon iconfont icon-gou' style={{'position':'absolute','right':'10px','top':'10px'}}></span></Link>
      <ReactSwipe
          className="carousel"
          swipeOptions={{
            continuous: true,
            auto: 2000,
          }}
          >
          <div> <img src={banner1} alt=""/> </div>
          <div> <img src={banner2} alt=""/> </div>
          <div> <img src={banner1} alt=""/> </div>
          <div> <img src={banner2} alt=""/> </div>
        </ReactSwipe>

        <ul className="deails-con">
          <li className="deails-con-title">2015冬季新款韩版加厚中长款小鹿毛呢大衣女系带加厚羊毛呢外套</li>
          <li className="deails-con-price">
            <span>￥100~200</span>
            <span>库存:<label>266</label></span>
          </li>
          <li className="deails-con-text">商品详情</li>

         

          <h3>{detail.title}</h3>
          {date(detail.time)}|{fillzero(detail.time)}
          <li className="deails-con-text__li">
            三渡房通云，成立于2001年，是以数据驱动的全价值链房产服务平台。提供住宅、写字楼、公寓、商业等房产交易服务，并拥有业内独有的房屋数据、人群数据、交易数据，以数据技术驱动服务品质及行业效率的提升。 经过16年的发展，三渡房通云目前已进驻北京、上海、广州、深圳、天津、成都、青岛、重庆、大连等28个城市和地区，全国直营门店数量超8000家，旗下经纪人近15万人。 成立至今，三渡房通云一直是行业引领者和颠覆者。业内率先承诺真实房源，全国真房源率已超过97%；并开展安心服务承诺，建立亿元保障金，保证消费者交易安全。 三渡房通云是真正具备大数据处理能力的房产服务平台。历时8年，收集36个城市7500万套房屋信息，并建立业内独有的“楼盘字典”，为真房源奠定基础。通过对房屋数据、人群数据和交易数据的挖掘和处理，提供从找房到签约的各类线上产品，帮助提高交易效率，优化交易体验

          </li>
        </ul>
        <ul className="details-price__button">
          <li className="add-cart clickwn">
            <span className="icon iconfont icon-gouwuche"></span>
            <><b onClick={addItem.bind(this)}>加入购物车</b></>
          </li>
          <li className="buy"><a href="#">立即购买</a></li>
        </ul>
      </>
    )
  }
}

const initMapStateToProps=state=>({
  detail:state.detail
});
const initMapDispatchToProps=dispatch=>({
    get:(id,dataName)=>dispatch(asyncDetail({
      id:id,
      url:`/data/article_${dataName}.data`,
      type:types.UPDATE_DETAIL
    })),
    addItem: (item) => {
      // console.log('newlist 41',item)
      dispatch({
        type: 'ADD_ITEM',
        payload:item
      });
    }
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail);