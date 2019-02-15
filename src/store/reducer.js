
import * as types from './types';
// const reducer = (state,action)=>{
//     let {type,payload}=action;  
// ==>
const reducer = (state,{type,payload})=>{
  // console.log(payload)
    switch (type) {
        case types.VIEW_HEADER:
            return {
                ...state,
                bHeader:payload
            };
        case types.VIEW_FOOT:
            return {
                ...state,
                bFoot:payload
            }
        case types.VIEW_LOADING:
            return {
              ...state,
              bLoading:payload
            };

        case types.UPDATE_HOME:
            return {
              ...state,
              home:payload
            };
      
        case types.UPDATE_FOLLOW:
            return {
              ...state,
              follow:payload
            };
      
        case types.UPDATE_DETAIL:
            // console.log('reducer',payload);
            return {
              ...state,
              detail:payload.data[payload.id-1]
            };
            
        case types.CHECK_USER:
            console.log(payload)
            let bl = {auth:false};
            if(payload.data){
              let list = payload.data;
              let username = payload.username;
              let password = payload.password;
              console.log(list)
              console.log(payload.username)
              list.forEach((item,index)=>{
                if(item.data.username===username && item.data.password === password) {
                  bl = list[index];
                }
              })
            }else{
              bl=payload
            }
            return {
              ...state,
              user:bl
            };
        case types.REDUCE_ITEM:
            let arr2 = [...state.buyCar]
            arr2.forEach(item => {
                if(item.number === 1) {
                  item.number = 1
                }else{
                  item.number--;
                }
              })
            
            return Object.assign({},state,{
              buyCar:[...state.buyCar]
            })  
        case types.ADD_ITEM :
          let find = false;
          let arr = [...state.buyCar];

          arr.forEach((item,index) => {
            if(item.id === payload.id){
              find=true;
              item.number++;
            }
          })
          if(!find){
            payload.number=1;
            arr.push(payload);
          }
          return Object.assign({},state,{
            buyCar:arr
          })
        case types.REMOVE_ITEM:
          state.buyCar.forEach((item,index)=>{
            if(item.id===payload.id){
              state.buyCar.splice(index,1);
            }
          })
          return Object.assign({},state,{
            buyCar:[...state.buyCar]
          });
        case types.REMOVE_ALL:
          return Object.assign({},state,{
            buyCar:[]
          });
        default:
            return state
    }
}

export default reducer;