import { FILTER_SUCCESS } from "../constants/filterValue";

export const filterValue =(state={minValue :0, maxValue:10001},action)=>{
    switch(action.type){

        case FILTER_SUCCESS:
            console.log(action.payload,"aako xau ra")
            return {minValue:action.payload.minValue, maxValue:action.payload.maxValue};

        default:
            return state;
        
        }
    
} 