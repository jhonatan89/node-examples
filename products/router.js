
const express = require('express');
const router = express.Router();
const { getProducts, updateProductById } = require('./controller');

/* GET product listing */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  res.json(products);
});
router.put('/:id', async function (req, res, next) {
  const id = req.params.id;
  console.log(id)
  const body = req.body;
  const products = await updateProductById(id, body);
  res.json(products);
});

module.exports = router;
