const mongodb = require('mongodb');
const uri = "mongodb+srv://jd_diazc:vfBMS08WauJNpivI@cluster0.ybu0i.mongodb.net/db_test?retryWrites=true&w=majority";
const dataBase = "db_test";
let db;

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const client = new mongodb.MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async (dbName = dataBase) => {
  const conn = await client.connect();
  db = conn.db(dbName);
  console.log('<===== Database connected =====>');
};

const getDbRef = () => {
  return db ? db : new Error('Connection error');
};


//EL CREATE FUNCIONA, RECIBE UN USUARIO (JSON) CON LA INFORMACIÓN SOLICITADA 
//SE CREA UN NUEVO ITEM EN LA COLECCIÓN DE LA BASE DE DATOS MONGO 
async function create(user){
  console.log("entra al mongo.js para crear")
  console.log(user)
  const testCollection = await client.db().collection('collection_test');
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
              user.password = hash;
              const { insertedId } =  testCollection.insertOne(user);
    });
    
    
});
  

}

module.exports = { connect, getDbRef , create};
