
const ProductSchema = require("../model/product")
const fs = require("fs")
const path = require('path')
const getImageExtension = require("../functions/getImageExtension")
const { OrderSchema } = require("../model/order")
const mongoose = require('mongoose');

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
        console.log("hi")
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

const deleteProducts = async(request,response)=>{
    try{
        console.log(request.user.role,'role')
        if(request.user.role === 'seller' || request.user.role === 'admin'){
            
            let id = request.params.id;
            console.log(id)
            const product = await ProductSchema.findOne({_id:id});
            // product
            const deleted = await ProductSchema.findByIdAndRemove(id);
            
                // id = new mongoose.Types.ObjectId(id);
                
                    const deleteOrder = await OrderSchema.deleteMany({productID:id});
                    console.log(deleteOrder);
                    // return response.status(200).json({message:"Deleted orders also succesfully"});
                
                console.log("deleted")
                try {
                    const deletingImage =path.join(__dirname,'../', product.image.split('/').slice(3).join('/'));
                    fs.unlinkSync(deletingImage); 
                    console.log('Image deleted successfully:', deletingImage);
                  } catch (error) {
                    console.error('Error deleting image:', error);
                  }
            
            console.log("hello")
            return response.status(200).json({message:"product deleted successfully"});
        }
        console.log("WHY")
            return response.status(403).json({message:"not allowed"})
    }catch(error){
        console.log("Error in deleting product",error)
        return response.status(400).json({message:"couldnot delete products"});
    }
}

const fetchProductBySeller = async(request,response)=>{
    console.log(request.user.role)
    if(request.user.role !=="seller"){
        console.log("HEllo")
        return response.status(403).json({message:"not allowed"})
    }
    try{
        console.log()
        const products = await ProductSchema.find({createdBy: new mongoose.Types.ObjectId(request.user._id)})
        // console.log(products,"love")
        return response.status(200).json({message:products})
    }catch(error){
        // console.log("Error",error)
    }

}

const updateProduct = async (request,response)=>{
    try{
        let productData = request.body;
        console.log(productData,"Product Data ho ni yo")
        if(request.params.id){
            if(Object.values(request.body).length <11){
                return response.status(400).json({message:"All fields are required"})
            }
            console.log(request.body,'motu aur patlu')
            if(request.files){
                console.log("gandu")
                const extension = getImageExtension(request.files.file.name)
                const targetDirectory = `product_images/${request.user.username}/${productData.category}/`;
                const currentDate = Date.now();
                const imageLocation = `http://localhost:8000/${targetDirectory}${currentDate}.${extension}`;
                productData = {...productData,image:imageLocation};
                
                console.log(imageLocation);
                const uploadedFile = request.files.file; // 'uploadedFile' should match the name attribute in your HTML form
                
                // Use the mv() method to move the file to a designated location (e.g., 'uploads' directory)
                const createPath = path.join(__dirname,'../',targetDirectory)
                if (!fs.existsSync(createPath)) {
                    // If it doesn't exist, create it
                    fs.mkdirSync(createPath, { recursive: true });
                }
                await uploadedFile.mv(`${createPath}/${currentDate}.${extension}`, (err) => {
                    if (err) {
                        console.log("hahaha",err)
                        return response.status(500).json({message:err});
                    }
                    
                    console.log("FIle Updated")
                    // res.send('File uploaded!');
                });
            }
            const productToUpdate = {
                id: productData.id,
                image: productData.image,
                title: {
                  "shortTitle": productData.shortTitle,
                  "longTitle": productData.longTitle
                },
                price: {
                  "mrp": productData.mrp,
                  "cost": productData.cost,
                  "discount": Number(productData.mrp) - Number(productData.cost)
                },
                quantity: productData.quantity,
                description: productData.description,
                discount: productData.extradiscount,
                tagline: productData.tagline,
               
              };
            
            const id = request.params.id;
            const updated = await ProductSchema.findOneAndUpdate({_id:id},productToUpdate,{new:true})
            if(!updated){

                console.log("not updated")
                return response.status(500).json({message:"No product updated"});
            }
            console.log(updated,'success')
            return response.status(200).send({message:updated});
        }
    }catch(error){
        console.log("Error in updating",error)
    }
}
module.exports = {fetchProduct,fetchSingleProduct, deleteProducts,fetchProductBySeller, updateProduct}