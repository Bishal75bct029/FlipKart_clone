import { SEARCH_FAILURE, SEARCH_SUCCESS } from "../constants/searchResults";

export const searchResults =(state =[],action) =>{
    switch(action.type){

        case SEARCH_SUCCESS:
            // console.log("hello search babu",action.payload)
            return action.payload;

        case SEARCH_FAILURE:
            return action.payload;

        case "sort_result":
            // state.push('gandu');
            return action.payload
        
        default:
            return state;
    }
}