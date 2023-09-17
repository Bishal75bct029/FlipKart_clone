import axios from "axios";
import { SEARCH_FAILURE, SEARCH_SUCCESS } from "../constants/searchResults";

export const SearchProduct = (apiUrl) => async (dispatch) => {
  // let apiUrl = `http://localhost:8000/search?search=${query}`;
  // console.log(apiUrl, "k vako ho timilai");
  try {
    // console.log("hello");
    const response = await axios.get(apiUrl);
    // console.log("kaha kaha xau k yr", response.data);
    dispatch({ type: SEARCH_SUCCESS, payload: response.data.products });
  } catch (error) {
    console.log("yeha pugeu", error);
    dispatch({ type: SEARCH_FAILURE, payload: [] });
  }
};
