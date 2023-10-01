import isValidEmail from "./isEmail";
import isOkPassword from "./passwordValidation";

export const handleSignUp = (e,showDialogStatus,setStatus) => {
    setStatus({
      login: { value: false, data: { ...showDialogStatus.login.data } },
      signup: { value: true, data: { ...showDialogStatus.signup.data } },
      forgotPassword:{value:false,data:{...showDialogStatus.forgotPassword.data}}
    });
    // console.log(status, "Main hoo hero");
  };

 export const handleLogin = (e,showDialogStatus,setStatus) => {
    setStatus({
      login: { value: true, data: { ...showDialogStatus.login.data } },
      signup: { value: false, data: { ...showDialogStatus.signup.data } },
      forgotPassword:{value:false,data:{...showDialogStatus.forgotPassword.data}}

    });
    
  };
 export const handleForgotPwd = (e,showDialogStatus,setStatus) => {
    setStatus({
      login: { value: false, data: { ...showDialogStatus.login.data } },
      signup: { value: false, data: { ...showDialogStatus.signup.data } },
      forgotPassword:{value:true,data:{...showDialogStatus.forgotPassword.data}}

    });
    
  };

  export const handleValidation = (e,formData,setFormData,formError,setFormError) => {
    if (e.target.name == "phone") {
      setFormData((formData) => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));

      if (e.target.value.length > 10) {
        console.log("good");
        console.log(e.target.value);
        setFormError((formError) => ({
          ...formError,
          phone: "*Phone number cannot be greater than 10 digits",
        }));
        console.log(formError.phone);
      } else {
        setFormError((formError) => ({ ...formError, phone: "" }));
      }
    }

    if (e.target.name == "email") {
      setFormData((formData) => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));

      if (!isValidEmail(e.target.value)) {
        setFormError((formError) => ({
          ...formError,
          email: "*Must be type email",
        }));
      } else {
        setFormError((formError) => ({ ...formError, email: "" }));
      }
    }

    if (e.target.name == "username") {
      setFormData((formData) => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));

      if (e.target.value.length < 4) {
        setFormError((formError) => ({
          ...formError,
          username: "*Must be greater than 4 characters",
        }));
      } else {
        setFormError((formError) => ({ ...formError, username: "" }));
      }
    }

    if (e.target.name == "password") {
      setFormData((formData) => ({
        ...formData,
        [e.target.name]: e.target.value,
      }));

      if (!isOkPassword(e.target.value)) {
        setFormError((formError) => ({
          ...formError,
          password:
            "*Must be greater than 8 digits with uppercase,lowercase and special character at least one",
        }));
        console.log("are you here?");
      } else {
        setFormError((formError) => ({ ...formError, password: "" }));
      }
    }
    if(e.target.checked){
      setFormData({...formData,seller:true})
    }
    console.log(formError, "k xa");
  };

  export const handleLoginValidation = (e,loginData,setLoginData,formError,setLoginFormError) => {
    e.preventDefault();
    if (e.target.name == "email") {
      setLoginData((loginData) => ({ ...loginData, email: e.target.value }));
      console.log("Gandu hai tu");

      if (!isValidEmail(e.target.value)) {
        setLoginFormError((formError) => ({
          ...formError,
          email: "*Must be type email",
          message:''
        }));
      } else {
        setLoginFormError((formError) => ({ ...formError, email: "",message:'' }));
      }
    }

    if (e.target.name == "password") {
      setLoginData((loginData) => ({
        ...loginData,
        [e.target.name]: e.target.value,
      }));
      if (!isOkPassword(e.target.value)) {
        setLoginFormError((loginFormError) => ({
          ...loginFormError,
          password: "Please Enter the valid password",
          message:''
        }));
        console.log("are you here?");
      } else {
        setLoginFormError((loginFormError) => ({
          ...loginFormError,
          password: "",
          message:''
        }));
      }
    }
  };
  