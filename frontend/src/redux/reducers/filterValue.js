import { FILTER_SUCCESS } from "../constants/filterValue";

export const filterValue =(state=[0,10001],action)=>{
    switch(action.type){

        case FILTER_SUCCESS:
            console.log(action.payload,"aako xau ra")
            return [0,100]

        default:
            return [0,10001];
        
        }
    
} 