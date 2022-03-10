const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct } = require('./controller');

/* GET product listing */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  res.json(products);
});
/** Create product */
router.post('/', async function (req, res, next) {
  const response = await createProduct(req.body);
  res.json(response);
});
/** Update product */
router.put('/:id', async function (req, res, next) {
  const response = await updateProduct(req.body, req.params.id);
  res.json(response);
});

module.exports = router;
