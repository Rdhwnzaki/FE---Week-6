import axios from "axios";

export const loginUser = (data,navigate)=> async(dispatch)=>{
    try{
        dispatch({type:"USER_LOGIN_PENDING" })
        const result = await axios.post(`${process.env.REACT_APP_MY_API_LOGIN}`,data)
        const user = result.data.message
        console.log(user)
        localStorage.setItem("token",user.token)
        dispatch({type:"USER_LOGIN_SUCCESS",payload:user})
        navigate('/profile')
        console.log("User Login Success")
    }catch(err){
        console.log("User Login Fail")
        console.log(err)
    }
}