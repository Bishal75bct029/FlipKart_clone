const ProductSchema = require("../model/product");
const filterProducts = async (request, response) => {
  try {
    if (request.query.search && (request.query.minPrice || request.maxPrice)) {
      const minPrice = request.query.minPrice || 0;
      const maxPrice = request.query.maxPrice || 9999999;
      const filteredProducts = await ProductSchema.find({
        $or: [
          { title: { $regex: request.query.search, $options: "i" } },
          { description: { $regex: request.query.search, $options: "i" } },
          { tagline: { $regex: request.query.search, $options: "i" } },
        ],
        "price.cost": { $gt: minPrice, $lt: maxPrice },
      });

      return response.status(200).json({ products: filteredProducts });
    } else if (request.query.search && !request.minPrice && !request.maxPrice) {
      const searchResults = await ProductSchema.find({
        $or: [
          { title: { $regex: request.query.search, $options: "i" } },
          { description: { $regex: request.query.search, $options: "i" } },
          { tagline: { $regex: request.query.search, $options: "i" } },
        ],
      });
      return response.status(200).json({ products: searchResults });
    } else if (request.query.suggestion) {
      const suggestionResults = await ProductSchema.find({
        $or: [
          {
            "title.shortTitle": {
              $regex: request.query.suggestion,
              $options: "i",
            },
          },
          { tagline: { $regex: request.query.suggestion, $options: "i" } },
        ],
      });
      return response.status(200).json({ suggestionResults });
    } else {
      return response.status(400).json({ message: "No search query provided" });
    }
  } catch (error) {
    return response.status(500).json({ message: error });
  }
  return response.status(400).json({ message: "vaena" });
};

const sortProducts = async (request, response) => {
  console.log("k xa kanxa");
  try {
    console.log(request.query);
    if (request.query.sort && request.query.search) {
      let products;
      let conditions = {
        $or: [
          { title: { $regex: request.query.search, $options: "i" } },
          { description: { $regex: request.query.search, $options: "i" } },
          { tagline: { $regex: request.query.search, $options: "i" } },
        ],
      };
      if (request.query.minPrice || request.query.maxPrice) {
        const minPrice = request.query.minPrice || 0;
        const maxPrice = request.query.maxPrice || 9999999;
        conditions = {
          ...conditions,
          "price.cost": { $gt: minPrice, $lt: maxPrice },
        };
      }
      if (request.query.sort === "asc") {
        products = await ProductSchema.find(conditions).sort({
          "price.cost": 1,
        });
      } else if (request.query.sort === "desc") {
        products = await ProductSchema.find(conditions).sort({
          "price.cost": -1,
        });
      } else {
        products = await ProductSchema.find(conditions);
      }
      return response.status(200).json({ products });
    }
    return response.status(404).json({ message: "error" });
  } catch (error) {
    return response.status(500).json({ message: "error" });
  }
};
module.exports = { filterProducts, sortProducts };
