//const User = require('../models/user');
const { getDbRef } = require("../../lib/mongo");
const bcrypt = require("bcrypt");
const COLLECTION_NAME = "users";
const saltRounds = 10;

const getAllUsers = async () => {
  try {
    const users = await getDbRef()
      .collection(COLLECTION_NAME)
      .find({})
      .toArray();
    return { users };
  } catch (error) {
    return { error };
  }
};

async function getUserByUserName(username) {
  try {
    const user = await getDbRef()
      .collection(COLLECTION_NAME)
      .findOne({ username });
    return user;
  } catch (error) {
    return { error };
  }
}

async function insertUser(user) {
  try {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(user.password, salt, function (err, hash) {
        user.password = hash;
        getDbRef().collection(COLLECTION_NAME).insertOne(user);
        return user;
      });
    });
  } catch (error) {
    return { error };
  }
}

module.exports = { getAllUsers, getUserByUserName, insertUser };
