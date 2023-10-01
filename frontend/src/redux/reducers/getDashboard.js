import { DASHBOARD_FAILURE, DASHBOARD_SUCCESS } from "../constants/getDashboard";

export const getDashboardData = (state =[],action)=>{
    switch(action.type){
        case DASHBOARD_SUCCESS:
            console.log("why")
            return [action.payload];

        case DASHBOARD_FAILURE:
            console.log("haha")
            return [];
        
        default:
            return state;
    }
}