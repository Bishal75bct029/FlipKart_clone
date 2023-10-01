import { CART_FAILED_TOAST, CART_SUCCESS_TOAST, ORDER_FAILED_TOAST, ORDER_SUCCESS_TOAST, RESET_CART_TOAST } from "../constants/cartToast";

export const cartToast = (state = {cart:false,order:false},action)=>{
    switch(action.type){
        case CART_SUCCESS_TOAST:
            return {cart:'success',order:false};

        case CART_FAILED_TOAST:
            return {cart:'failed',order:false}

        case ORDER_SUCCESS_TOAST:
            return {cart:false,order:'success'}

        case ORDER_FAILED_TOAST:
            return {cart:false,order:'failed'}

        case RESET_CART_TOAST:
            
            return {cart:false,order:false}
        
        default:
            return state;
        
    }
}