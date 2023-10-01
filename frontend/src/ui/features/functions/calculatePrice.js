export const calculateMRP = (product) => {
  let totalPrice = 0;
  for (let i = 0; i < product.length; i++) {
    // console.log(product[0].productID.price.mrp + product[1].productID.price.mrp,'gorey bhai')
    totalPrice = totalPrice + (product[i].quantity * product[i].productID.price.mrp);
  }
  return  totalPrice;
};
export const calculateDiscount = (product) => {
  let totalDiscount = 0;
  for (let i = 0; i < product.length; i++) {
    totalDiscount = totalDiscount +( product[i].quantity * product[i].productID.price.discount);
  }
  return  totalDiscount;
};
