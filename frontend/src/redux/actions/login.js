import axios  from "axios";
import { LOGIN_SUCCESS,LOGIN_FAILURE } from "../constants/userLogin";
import { CLOSE } from "../constants/handleLoginDialog";
import { LOGIN_SUCCESS_TOASTIFY,LOGIN_FAILURE_TOASTIFY } from "../constants/authToast";

export const login = (loginData,setLoginData,setLoginFormError) => async(dispatch)=>{
    try {
        console.log(loginData,'logindata aaena ra bishal don')
        let response = await axios.post("https://flip-kart-clone-9xew.vercel.app/login", loginData);
        console.log("k xa")
        if (response.status === 200) {
          const responseData = JSON.parse(response.data);
          console.log(responseData,"response data hai mein");
          setLoginData({
            email:'',
            password:'',
          })
          dispatch({type:LOGIN_SUCCESS_TOASTIFY});
          console.log("login vaeu")
          
        dispatch({type:CLOSE})
          dispatch({type:LOGIN_SUCCESS,payload:responseData})
        //   console.log("hi", username); 
        }
      } catch (error) {
        console.log(error);
        dispatch({type:LOGIN_FAILURE_TOASTIFY})
        dispatch({type:LOGIN_FAILURE,payload:error.response})
        setLoginFormError(error.response.data)
      }

}