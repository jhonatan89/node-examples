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

async function updateProduct(product) {
  try {
    const productSaved = await Product.update(product);
    return { status: 201, productId: productSaved.id };
  } catch (error) {
    console.log(error);
    return { status: 500, error: error };
  }
}

module.exports = { getProducts, createProduct, updateProduct};
