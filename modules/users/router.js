var express = require("express");
var router = express.Router();
const { getAllUsers, insertUser } = require("./controller");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});

/**
 * POST create user
 */
router.post("/", async function (req, res, next) {
  const newUser = await insertUser(req.body);
  res.json(newUser);
});

module.exports = router;
