const ProductSchema = require("../model/product");

const getProductByCategories = async (request, response) => {
  try {
    if (request.query.category) {
      category = request.query.category;
      let products;
      if (request.query.sort === "asc") {
        products = await ProductSchema.find({ category: category }).sort({
          "price.cost": 1,
        });
      } else if (request.query.sort === "desc") {
        products = await ProductSchema.find({ category: category }).sort({
          "price.cost": -1,
        });
      } else {
        products = await ProductSchema.find({ category: category });
      }
      if (Array.isArray(products)) {
        return response
          .status(200)
          .json({ message: "Successfully fetched products", products });
      }
      return response.status(500).json({ message: "Server Error" });
    } else {
      return response.status(400).json({ message: "No categories provided" });
    }
  } catch (error) {
    return response.status(500).json({ message: error });
  }
};
module.exports = getProductByCategories;
