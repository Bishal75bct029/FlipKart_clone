const ProductSchema = require("../model/product");
const filterProducts = async (request, response) => {
  try {
    if (request.query.search && (request.query.minPrice || request.maxPrice)) {
      const minPrice = request.query.minPrice || 0;
      const maxPrice = request.query.maxPrice || 9999999;
      const filteredProducts = await ProductSchema.find({
        $or:[

          {title: { $regex: request.query.search, $options: "i" }},
          {description: { $regex: request.query.search, $options: "i" }},
          {tagline: { $regex: request.query.search, $options: "i" }},
        ],
        "price.cost": { $gt: minPrice, $lt: maxPrice },

      });

      console.log(filteredProducts);
      return response.status(200).json({ products: filteredProducts });
    } else if (request.query.search && !request.minPrice && !request.maxPrice) {
      console.log("hello",request.query.search)
      const searchResults = await ProductSchema.find({
        $or:[

          {title: { $regex: request.query.search, $options: "i" }},
          {description: { $regex: request.query.search, $options: "i" }},
          {tagline: { $regex: request.query.search, $options: "i" }},
        ]
      });
      return response.status(200).json({products:searchResults})
    }else if(request.query.suggestion){
      const suggestionResults = await ProductSchema.find({
        $or:[{'title.shortTitle':{$regex:request.query.suggestion, $options:"i"}},{tagline:{$regex:request.query.suggestion, $options:"i"}}]
      })
      return response.status(200).json({suggestionResults});
    }
    else{
      console.log("error")
      return response.status(400).json({message:"No search query provided"});
    }
  } catch (error) {
    console.log(error, "kya huwa bhai");
    return response.status(500).json({message:error})
  }
};

const sortProducts = async(request,response)=>{
  try{

    if(request.query.sort && request.query.search){
      console.log('hello boys and girls')
      let products;
      const conditions = {
        $or:[
          {title: { $regex: request.query.search, $options: "i" }},
          {description: { $regex: request.query.search, $options: "i" }},
          {tagline: { $regex: request.query.search, $options: "i" }},
        ]
      }
      if(request.query.sort ==='asc'){   
         products = await ProductSchema.find(conditions).sort({'price.cost':1})
        }else if(request.query.sort ==='desc'){
          products = await ProductSchema.find(conditions).sort({'price.cost':-1})
        }else{
          products = await ProductSchema.find(conditions)

        }
        console.log(products,"I am ")
        return response.status(200).json({products})
    }
    return response.status(404).json({message:"error"})
  }catch(error){
    return response.status(500).json({message:"error"})

  }
}
module.exports = { filterProducts,sortProducts };
