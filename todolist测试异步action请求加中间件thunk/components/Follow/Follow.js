import React,{Component} from 'react'
import List from "../../common/List/List";
import './Follow.css'
import pubsub from 'pubsub-js';

class Follow extends Component{
  state={
    list:[]
  };
  componentDidMount(){
    pubsub.publish('view_loading',true);
    fetch(
      `/data/follow.data`
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
        <List list={this.state.list} dataName="follow"/>
      </div>
    )
  }
}
export default Follow;