const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
if(err)
{
  return console.log('Unable to connect to MongoDB');
}
else
{
    console.log('Connected to MongoDB');
}
const db=client.db('TodoApp')

/*To get the records */
db.collection('Todos').find({
    _id:new ObjectID('5c587f914660a31db442784a')
}).toArray().then((docs)=>
{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));    

},(err)=>
{
    console.log('Unable to fetch todos',err);
}); 

/*TO Count the Records*/


db.collection('Todos').count().then((count)=>
{
   console.log(`Todoscnt :${count}`);
},(err)=>
{
  console.log('Unable to fetch',err);
});
    client.close();
});
