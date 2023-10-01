import { IS_NAV_LOADED, IS_NAV_NOTLOADED } from "../constants/navload";

export const navload = (state = {load:false},action)=>{
    switch(action.type){
        case IS_NAV_LOADED:
            return {navload:'loaded'}

        case IS_NAV_NOTLOADED:
            return {navload:'notLoaded'};

        default:
            return state;
    }
}