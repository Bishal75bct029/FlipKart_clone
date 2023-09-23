import { LOGIN_SUCCESS,LOGIN_FAILURE } from "../constants/userLogin";

export const loginCredentials = (state ={_id:'',email:'',username:'',token:'',role:''},action)=>{

    switch(action.type){

        case LOGIN_SUCCESS:
            localStorage.setItem('token',`Bearer ${action.payload.token}`);
            return {...state, email:action.payload.email,username:`${action.payload.username}`, token:`Bearer ${action.payload.token}`,role:action.payload.role,_id:action.payload._id}

        case LOGIN_FAILURE:
            // console.log(action.payload.data.message,"ma hu nepali babu")
            // console.log()
            return {_id:'',email:'',username:'',token:'',role:''}

        default:
            return state;
    }


}