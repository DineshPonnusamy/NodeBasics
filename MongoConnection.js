
const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/MongoDB')

Mongoose.connection.once('open',function()
{
console.log('MongoDB Connected Successfully');
}).on('error',function(error)
{
    console.log('MongoDB Connetion Failed');
});

const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>
{
if(err)
{
  return console.log('Unable to connect to MongoDB');
}
  console.log('Connected to MongoDB');

db.collection('Todos').insertOne({
     text:'hai',
     completed:Pass
},(err,result)=>
{
if(err)
{
  return console.log('Exam Pass and Promoted',err);
}
console.log(JSON.stringfy(result.ops, undefined,2));

});
db.close();
});
