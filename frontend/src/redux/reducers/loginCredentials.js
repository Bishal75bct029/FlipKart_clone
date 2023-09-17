import { LOGIN_SUCCESS,LOGIN_FAILURE } from "../constants/userLogin";

export const loginCredentials = (state ={_id:'',email:'',username:'',token:''},action)=>{

    switch(action.type){

        case LOGIN_SUCCESS:
            return {...state, email:action.payload.email,username:action.payload.username, token:action.payload.token}

        case LOGIN_FAILURE:
            console.log(action.payload.data.message,"ma hu nepali babu")
            // console.log()
            return { ...state, message:action.payload.data.message,status:action.payload.status}

        default:
            return state;
    }


}