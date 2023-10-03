const getImageExtension = require("../functions/getImageExtension");
const ProductSchema = require("../model/product");
const fs = require('fs')
const path = require('path');
const postProduct = async (request, response) => {
  try {
    console.log(__dirname);
    if(request.user.role !== 'seller'){
      return response.status(403).json({message:'You are not allowed to post products'}); 
    }
    console.log("hi");
    if(Object.values(request.body).length <11){
      console.log(request.body)
      console.log("fill all the products")
      return response.status(400).json({message:"fill all the data"});
    }
    const productData = request.body;
    console.log(request.body,"Iambody")
    
    if(!request.files){
      console.log("Where is the file?");
      return response.status(400).json({message:"No Image  uploaded"});

    }
    const extension = getImageExtension(request.files.file.name)
    const targetDirectory = `product_images/${request.user.username}/${productData.category}/`;
    const currentDate = Date.now();
    const imageLocation = `http://localhost:8000/${targetDirectory}${currentDate}.${extension}`;

    console.log(imageLocation);
    const uploadedFile = request.files.file; 

  const createPath = path.join(__dirname,'../',targetDirectory)
  if (!fs.existsSync(createPath)) {
    fs.mkdirSync(createPath, { recursive: true });
  }
  await uploadedFile.mv(`${createPath}/${currentDate}.${extension}`, (err) => {
    if (err) {
      console.log("hahaha",err)
      return response.status(500).json({message:err});
    }

    console.log("FIle uploaded")
  });

    const productToInsert = {
      id: productData.id,
      image: imageLocation,
      category:productData.category,
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
      tagline: productData.tagline,
      createdBy:request.user._id
    };
    console.log("ProductTOInsert",productToInsert)

     await ProductSchema.insertMany([productToInsert]);
     console.log("Inserted Success");
     return response.status(200).json({message:"Successfully added product"})
    
  } catch (error) {
    console.log(error);
    return response.status(500).json({message:"server error",error})
  }
};

module.exports = { postProduct };
