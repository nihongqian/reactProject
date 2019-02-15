import {Component} from "react";
import React from "react";
import {connect} from 'react-redux';
import async2 from "../store/actions";
import async1 from "../store/actions";
//UI
class ToDoList extends Component{
  render(){
    let {list,add,loading}=this.props;
    return (
      <>
        <h3>留言板</h3>
        <input type="button" value="提交" onClick={add}/>
        {loading && <div>加载中...</div>}
        <ul>
          {
            list.map((val,index)=>(
              <li key={index}>{val}</li>
            ))
          }
        </ul>
      </>
    )
  }
}


const mapStateToProps=state=>({
  list:state.list,
  loading:state.loading
});

const mapDispatchToProps=dispatch=>({
  // add:()=>{
  //   fetch(
  //     `/data/index.data`
  //   ).then(
  //     res=>res.json()
  //   ).then(
  //     data=>{
  //       setTimeout(()=>{
  //         dispatch({type:'ADD_ITEM',payload:data[0].pinlei})
  //       },1000)
  //     }
  //   )
  // }
  // add:()=>dispatch({type:'ADD_ITEM',payload:'...'}),
  
  // 下面是引进异步action.js的时候了
  // add:()=>dispatch(异步action函数())
  add:()=>dispatch(async1(dispatch))
  // add:()=>dispatch(async2()).then(
  //   (id)=>console.log('回执后的业务',id)
  // )

});


export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);



















