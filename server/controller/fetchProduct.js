const ProductSchema = require("../model/product")

const fetchProduct = async(request, response)=>{
    try{

        let fetchedProduct = await ProductSchema.find()
        console.log(fetchedProduct)
        console.log("aaeu timi ")
       
        console.log("kaha xau tani ani ")
        
        response.status(200).send(fetchedProduct)
    }catch(error){
        response.status(500).send(error)
    }

}

const fetchSingleProduct = async(request,response)=>{
    try{
        const id = request.params.id;
        let fetchedProduct = await ProductSchema.findOne({_id:id})
        if(fetchedProduct){
            // console.log(fetchedProduct)
            return response.status(200).json(fetchedProduct)
        }else{
            return response.status(404).json({message:'Product not found'})
        }
    }catch(error){
        return response.status(500).json({message:error})

    }

}
module.exports = {fetchProduct,fetchSingleProduct}