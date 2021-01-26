require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient;
const contract = require('truffle-contract');
app.use(express.json());

mongodb.connect(process.env.DB, {useUnifiedTopology: true}, (err, client) => {
  const db = client.db('Cluster0');

  console.log(db);

  routes(app, db);
  app.listen(process.env.PORT || 8082, () => {
    console.log('listening on port 8082');
  });
});

// // MONGO MAYBE

// const MongoClient = require('mongodb').MongoClient;
// const uri =
// moved to .env for now
// const client = new MongoClient(uri, {useNewUrlParser: true});
// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });
