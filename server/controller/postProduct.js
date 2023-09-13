const ProductSchema = require("../model/product");

const postProduct = async (request, response) => {
  try {
    console.log("hi");
    const productData = request.body;
    console.log(request.body,"Iambody")
    // const userId = request.user._id;
    // response.status(200).json({ message: productData });
    const productToInsert = {
      id: productData.id,
      url: productData.url,
      detailUrl: productData.detailUrl,
      title: {
        "shortTitle": productData.shortTitle,
        "longTitle": productData.longTitle
      },
      price: {
        "mrp": productData.mrp,
        "cost": productData.cost,
        "discount": productData.discount
      },
      quantity: productData.quantity,
      description: productData.description,
      discount: productData.extradiscount,
      tagline: productData.tagline
    //   createdBy: userId,
    };
    console.log("ProductTOInsert",productToInsert)
    // return

     await ProductSchema.insertMany([productToInsert]);
     console.log("Inserted Success");
     return response.status(200).json({message:"Successfully added product"})
    // const success = await insertInDb.save();
    // if (insertInDb) {
    //   console.log("inserted successfully");
    // } else {
    //   console.log("Error in inserting");
    // }
  } catch (error) {
    console.log(error);
    return response.status(500).json({message:"server error",error})
  }
};

module.exports = { postProduct };
