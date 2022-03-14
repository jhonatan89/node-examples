//const User = require('../models/user');
const { getDbRef } = require('../../lib/mongo');
const bcrypt = require("bcryptjs")

const COLLECTION_NAME = 'users';
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

async function createUser(user) {
  try {
    bcrypt.genSalt(saltRounds, function (saltError, salt) {
      bcrypt.hash(user.password, salt, function(hashError, hash) {
          user.password = hash;
          getDbRef()
          .collection(COLLECTION_NAME)
          .insertOne(user);
        })
    })
    return user;
  } catch (error) {
    console.log(error);
    return { error };
  }
}



module.exports = { getAllUsers, getUserByUserName, createUser };
