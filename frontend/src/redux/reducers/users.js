import { SUCCESS_USERS, FAILURE_USERS } from '../constants/users';

export const users = (state =[],action)=>{
    switch(action.type){
        case SUCCESS_USERS:
            // console.log(action.payload,'loveing')
            return action.payload;
        
        case FAILURE_USERS:
            return [];
        
        default:
            return [];
    }
}