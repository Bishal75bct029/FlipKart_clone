const products = require('../constant/data')
const {database} = require('../database/db')
const ProductSchema = require('../model/product')


const insertData = async()=>{
    try{
        await database()
        await ProductSchema.insertMany(products)
        console.log('success')
    }catch(error){
        console.log(error.message)
    }
}

insertData()

