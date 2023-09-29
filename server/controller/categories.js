const ProductSchema = require("../model/product");

const getProductByCategories = async (request,response)=>{
    try{

        if(request.query.category){
            category = request.query.category;
            let products
            if(request.query.sort ==='asc'){
                console.log("i want you")
                 products = await ProductSchema.find({category:category}).sort({'price.cost':1});
            }else if( request.query.sort ==='desc'){
                console.log("k xa kanxa")
                 products = await ProductSchema.find({category:category}).sort({'price.cost':-1})
            }else{
                 products = await ProductSchema.find({category:category});
                
            }
            if(Array.isArray(products)){
                return response.status(200).json({message:"Successfully fetched products",products});
            }
            return response.status(500).json({message:"Server Error"});
            
        }else{
            return response.status(400).json({message:"No categories provided"});
        }
        
    }catch(error){
        console.log(error)
        return response.status(500).json({message:error});
    }
}
module.exports = getProductByCategories