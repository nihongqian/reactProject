//异步action

//1.给外面的dispatch返回对象
//2. 公共的异步处理业务
//3. 提交请求到的数据给reducer,同时也可给调用方一个回执

// 异步action + 可复用:	dispatch(asyncAction(xx,xx,xx))  dispatch 默认接受对象  asyncAtion内部要返回对象
// 异步action + 可复用:	dispatch(asyncAction(xx,xx,xx))  dispatch 接受函数  asyncAtion内部要返回函数
// 	需要中间件redux-thunk支持 ,dispatch默认支持对象，不接受函数,中间件用来改装dispatch
const async1 = (dispatch)=>{
    fetch(
        `/data/index.data`
    ).then(
        res=>res.json()
    ).then(
        data=>{
            setTimeout(() => {
                dispatch({type:'VIEW_LOADING',payload:false})
                dispatch({type:'ADD_ITEM',payload:data[0].title})
            }, 1000);
        },
    )

    return {type:'VIEW_LOADING',payload:true}
}

const async2=()=>(dispatch,getState)=>{
    dispatch({type:'VIEW_LOADING',payload:true})

    return fetch(
        `/data/index.data`
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:'VIEW_LOADING',payload:false});
            dispatch({type:'ADD_ITEM',payload:data[0].title})

            return data[0].id
        }
    )
}

export default async1;