import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../constants/getProduct";

const getProducts = () => async(dispatch)=>{
    try{

        let response = await axios.get('http://localhost:8000/getProducts')
        console.log(response.data,"I am boy")
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
    }catch(error){
        console.log('action error')
        dispatch({type:GET_PRODUCTS_FAILURE,})
    }
}

export default getProducts;