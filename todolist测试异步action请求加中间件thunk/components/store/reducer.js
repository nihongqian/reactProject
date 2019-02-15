
const reducer = (state,action)=>{
    let {type,payload}=action;

    switch (type) {
        case 'ADD_ITEM':
            return {
                ...state,
                list:state.list.concat(payload)
            };
        case 'VIEW_LOADING':
            return {
                ...state,
                loading:payload
            };
        default:
            return state
    }
}

export default reducer;