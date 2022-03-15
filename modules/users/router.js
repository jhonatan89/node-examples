var express = require('express');
var router = express.Router();
const {createUser} = require('./controller');


/**
 * POST create user. ----DONE-----
 */
router.post('/',async function (req, res, next){
  const users = await createUser(req.body);
  res.json({usuario: "funciona"})
});




module.exports = router;
