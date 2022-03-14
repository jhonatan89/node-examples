//const User = require('../models/user');
const { getDbRef } = require('../../lib/mongo');
const bcrypt = require('bcrypt');
const COLLECTION_NAME = 'users';

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
    const saltRounds = 10;
    const plain = user.password;
    user.password = bcrypt.hashSync(plain, saltRounds);

    const newUser = await getDbRef()
      .collection(COLLECTION_NAME)
      .insertOne(user);
    return newUser;

  } catch (error) {
    return { error };
  }
}

module.exports = { getAllUsers, getUserByUserName, createUser };
