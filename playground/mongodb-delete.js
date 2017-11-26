//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connect to Mongodb server');


// NOTE: edut undet this

// deleteMany
// db.collection('Todos').deleteMany({text: 'Eat food'}).then((result) => {
//   console.log(result);
// });
//
// //delete One
// db.collection('Todos').deleteOne({text: 'mustak'}).then((result)=> {
//   console.log(result);
// });


db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  console.log(result);
})


  //db.close()


});
