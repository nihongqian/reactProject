import React,{Component} from 'react'
import './Classify.css'
import ProductList from "../../common/ProductList/ProductList";
import pubsub from 'pubsub-js';
class Classify extends Component{

  state={
    list:[]
  };
  componentDidMount(){
    pubsub.publish('view_loading',true);
    fetch(
      `/data/product_list.data`
    ).then(
      res=>res.json()
    ).then(
      data=>{
        setTimeout(()=>{
          pubsub.publish('view_loading',false);
          this.setState({list:data});
        },1000)
      }
    )
  }
  render(){
    return (
      <div className="newsList">
        <ProductList list={this.state.list} dataName="follow"/>
      </div>
    )
  }
}
export default Classify;