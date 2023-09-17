import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/login";




export const handleSignSubmit = async (formData,formError,setInfoMessage) => {
  
    
    // console.log('error hai kya',formError)
    if (!Object.values(formError).every((value) => !value)) {
      console.log("Error hai bhai");
      
      return;
    }
    if (Object.values(formData).some((value) => !value)) {
      console.log(formData, "formdata hai bhai");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/signup",
        formData
      );
      if (response.status == 200) {
        console.log("User created Successfully");
        setInfoMessage({ success: true, message: response.data });
      }

      
    } catch (error) {
      if (error.response && error.response.status == 400) {
        setInfoMessage({ success: false, message: error.response.data });
        console.log("Error", error.response.data);
      } else {
        console.log("tu mera dil hai");
      }
    }
  };

  export const Login = async (loginFormError,loginData,dispatch) => {
    
    if (!Object.values(loginFormError).every((value) => !value)) {
      console.log("Error hai bhai");
      console.log(loginFormError);
      return;
    }
    if (Object.values(loginData).some((value) => !value)) {
      console.log(loginData, "formdata hai bhai login ka");
      return;
    }
    console.log(loginData,"Ma login Data hu hai ")
    dispatch(login(loginData))
  };