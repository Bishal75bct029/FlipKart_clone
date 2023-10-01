import { SEARCH_FAILURE, SEARCH_SUCCESS } from "../constants/searchResults";

export const searchResults =(state ={search_results:[],loading:'false'},action) =>{
    switch(action.type){

        case SEARCH_SUCCESS:
            // console.log("hello search babu",action.payload)
            // state.search_results.push(action.payload)
            return {search_results:action.payload, loading:action.mode, };
            

        case SEARCH_FAILURE:
            state.search_results.push(action.payload)
            console.log(state,'mein hoo')
            return {search_results:action.payload, loading:'failed' };

        case "sort_result":
            // state.push('gandu');
            return action.payload
        
        default:
            return state;
    }
}