var express = require('express');
var router = express.Router();
const { getAllUsers, createUser } = require('./controller');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});

/**
 * POST create user
 */

 router.post('/', async function (req, res, next) {
  const newUser = await createUser(req.body);
  res.send(newUser);
});

module.exports = router;
