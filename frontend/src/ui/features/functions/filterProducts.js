export const filterProduct = (products,category)=>{
    const filteredProduct = products.filter((product,index)=> product.category === category)
    return filteredProduct;
}

