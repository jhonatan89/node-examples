const Product = require('./model');

async function getProducts() {
  const products = await Product.findAll();
  return products;
}

async function createProduct(product) {
  try {
    const productSaved = await Product.create(product);
    return { status: 201, productId: productSaved.id };
  } catch (error) {
    console.log(error);
    return { status: 500, error: error };
  }
}

async function updateProduct(product, pId) {
  try {
    const productUpdated = await Product.update(product,{where: { id: pId},  returning: true, plain: true});
    if(productUpdated[1] > 0){
      return { status: 200, productsUpdated: productUpdated[1] };
    }
    else{
      return { status: 500, error: "No product found with such id" };
    }
  } catch (error) {
    console.log(error);
    return { status: 500, error: error };
  }
}


module.exports = { getProducts, createProduct, updateProduct };
