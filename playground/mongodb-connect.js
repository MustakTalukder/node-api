//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    console.log('Unable to connect to MongoDB server');
  }

  console.log('Connect to Mongodb server');

  db.collection('Todos').insertOne({
  }, (err, result) => {
    if (err){
      return console.log("Unable to conect TodoApp");

    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('user').insertOne({
    name: "mustak",
    age: "24"
  }, (err, result) => {
    if (err) {
      return console.log("Yes it is");
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close()


});
