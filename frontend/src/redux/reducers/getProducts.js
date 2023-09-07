import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../constants/actionConstants";
export const getProducts = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
        console.log("are you here reducers")
      return {...state, productsData:action.payload};
      break;

    case GET_PRODUCTS_FAILURE:
        console.log("hey")
        return {...state, productsData:"Error in fetching"}
    default:
    return state;
  }
};
