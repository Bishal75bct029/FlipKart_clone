import axios  from "axios";
import { LOGIN_SUCCESS,LOGIN_FAILURE } from "../constants/userLogin";
import { CLOSE } from "../constants/handleLoginDialog";

export const login = (loginData) => async(dispatch)=>{
    try {
        console.log(loginData,'logindata aaena ra bishal don')
        let response = await axios.post("http://localhost:8000/login", loginData);
        console.log("k xa")
        if (response.status === 200) {
          const responseData = JSON.parse(response.data);
          console.log(responseData,"response data hai mein")
        //   handleClose()
        dispatch({type:CLOSE})
          dispatch({type:LOGIN_SUCCESS,payload:responseData})
        //   console.log("hi", username); 
        }
      } catch (error) {
        console.log(error)
        dispatch({type:LOGIN_FAILURE,payload:error.response})
      }

}