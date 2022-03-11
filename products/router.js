const express = require('express');
const router = express.Router();
/****PROFE ESTO FUE LO QUE LLEVABA ANTES DEL PROBLEMA CON SQLITE3 ****/

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



/****PROFE ESTO FUE LO QUE LLEVABA ANTES DEL PROBLEMA CON SQLITE3 ****/
/****PROFE ESTO FUE LO QUE LLEVABA ANTES DEL PROBLEMA CON SQLITE3 ****/
/****PROFE ESTO FUE LO QUE LLEVABA ANTES DEL PROBLEMA CON SQLITE3 ****/
/**Update a product */
router.put('/:id',  async function (req, res, next) {
  const response = await updateProduct(req.body);
  res.json(response);
});



module.exports = router;
