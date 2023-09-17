import { OPEN,CLOSE } from "../constants/handleLoginDialog";

export const handleLoginDialog = (state = false, action)=>{
    switch (action.type){
        
        case OPEN:
            return true;
        
        case CLOSE:
            return false;
        
        default:
            return state;
    }
}