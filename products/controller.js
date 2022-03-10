const products = [
  {
    id: 1,
    name: 'Samnsung A20',
    price: 200,
    currency: { name: 'US Dollar', sign: '$' },
  },
];

function getProducts() {
  return products;
}
function updateProductById(id, body){
  let index = products.findIndex((p)=> p.id === Number(id));
  products[index] = body;
  return products[index];
}

module.exports = { getProducts, updateProductById };