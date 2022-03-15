//const User = require('../models/user');
const { getDbRef , create} = require('../../lib/mongo');
const COLLECTION_NAME = 'users';


//FUNCION PARA CREAR EL USUARIO. RECIBE UN JSON CON LA INFORMACION REQUERIDA
async function createUser(user){
  create(user);

}

module.exports = { createUser };
