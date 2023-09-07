import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../constants/actionConstants";

const getProducts = () => async(dispatch)=>{
    try{

        let response = await axios.get('http://localhost:8000/getProducts')
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
    }catch(error){
        dispatch({type:GET_PRODUCTS_FAILURE})
    }
}

export default getProducts;