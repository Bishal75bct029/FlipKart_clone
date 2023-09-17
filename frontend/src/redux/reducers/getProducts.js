import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../constants/getProduct";
export const getProducts = (state = { counter: 0 , productsData:[]}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      console.log("are you here reducers");
      return {  productsData: action.payload };

    case GET_PRODUCTS_FAILURE:
      console.log("hey");
      return { ...state, productsData: "Error in fetching" };
    default:
      return state;
  }
};
