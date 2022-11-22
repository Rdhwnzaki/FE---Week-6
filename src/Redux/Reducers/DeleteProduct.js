const initialState = {
    product:{
        id_product:"",
        name_product:"",
        stock_product:"",
        price_product:"",
        category:"",
        photo_product:""
    },
    isLoading :false
}

const DeleteProductReducers = (state=initialState,action)=>{
    if(action.type === "DELETE_DATA_PENDING"){
        return{
            ...state,
            isLoading:true
        }
    }else if(action.type === "DELETE_DATA_SUCCESS"){
        return{
            ...state,
            product:action.payload,
            isLoading:false
        }
    }else{
        return state
    }
}
export default DeleteProductReducers