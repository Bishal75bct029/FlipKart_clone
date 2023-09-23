import axios from "axios";
import {SUCCESS_USERS,  FAILURE_USERS } from '../constants/users'

export const getUsers = ()=> async(dispatch)=>{
    try{
        const users = await axios.get('http://localhost:8000/getUsers');
        // console.log(users.data.message,'love you');
        dispatch({type:SUCCESS_USERS,payload:users.data.message})
    }catch(error){
        console.log(error)
        dispatch({type:FAILURE_USERS,payload:[]})
    }
}