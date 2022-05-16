const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('./controller');
const { checkJwt } = require('../../middlewares/auth0-jwt.validator');

/* GET product listing */
router.get('/', checkJwt, async function (req, res, next) {
  const products = await getProducts();
  res.json(products);
});
/** Create product */
router.post('/', async function (req, res, next) {
  const response = await createProduct(req.body);
  res.json(response);
});

module.exports = router;
