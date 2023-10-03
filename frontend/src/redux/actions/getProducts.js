import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "../constants/getProduct";

const getProducts = (setIsProduct) => async(dispatch)=>{
    try{

        let response = await axios.get('https://flip-kart-clone-9xew.vercel.app/getProducts')
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data});
        setIsProduct("success");
    }catch(error){
        console.log('action error');
        setIsProduct("failed")
        dispatch({type:GET_PRODUCTS_FAILURE,})
    }
}

export default getProducts;