
import * as types from '../types';
const asyncDetail = ({type,url,start,count,id})=>(dispatch,getState)=>{

    dispatch({type:types.VIEW_LOADING,payload:true})
    fetch(
        url,
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            if(id){
                dispatch({
                    type:type,
                    payload:{data,id}
                })
            }else{
                dispatch({type:type,payload:data})
            }
        }
    )
}
export default asyncDetail;

  // state={
  //   detail:{}
  // };
  // componentDidMount(){
  //   let id=this.props.match.params.id-0;
  //   let dataName=querystring.parse(this.props.location.search).dataName;

  //   pubsub.publish('view_loading',true);

  //   fetch(
  //     `/data/article_${dataName}.data`
  //   ).then(
  //     res => res.json()
  //   ).then(
  //     data=>{
  //       setTimeout(()=>{
  //         pubsub.publish('view_loading',false);
  //         this.setState({detail:data[id-1]});
  //       },1000)
  //     }
  //   )
  // }