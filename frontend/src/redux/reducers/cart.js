import { ADDED_TO_CART, FAILED_TO_CART } from "../constants/cart";

export const cart = (state= [],action)=>{
    switch (action.type){
        case ADDED_TO_CART:
            return action.payload;
        
        case FAILED_TO_CART:
            return state;
        
        default:
            return state;
    }

}