import { ORDER_DATA_SUCCESS,FAILED_ORDER_FETCH } from "../constants/order";

export const order = (state=[],action)=>{
    switch (action.type){
        case ORDER_DATA_SUCCESS:
            return action.payload;

        case FAILED_ORDER_FETCH:
            return []

        default:
            return state;
    }
}