useEffect(()=>{
    const validateLogin =async()=>{

      if(localStorage.getItem('token')===null){
        return
      }
      try{
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization':`${token}`
        }
        const checkLogin = await axios.post('http://localhost:8000/',null,{headers:headers})
        console.log("love you")
        console.log(checkLogin.data)
        dispatch({type:LOGIN_SUCCESS,payload:checkLogin.data.token})
        
      }catch(error){
        console.log('error',error);
        return
      }
    }
    validateLogin();
  },[])