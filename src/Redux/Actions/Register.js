import axios from "axios";

export const regisUser = (data,navigate)=> async(dispatch)=>{
    try{
        dispatch({type:"USER_REGISTER_PENDING" })
        const result = await axios.post(`${process.env.REACT_APP_MY_API_REGISTER}`,data)
        const user = result.data.data
        console.log(user)
        // localStorage.setItem("token",user.token)
        dispatch({type:"USER_REGISTER_SUCCESS",payload:user})
        // navigate('/profile')
        console.log("User Register Success")
    }catch(err){
        console.log("User Register Fail")
        console.log(err)
    }
}