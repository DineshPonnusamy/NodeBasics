//const {MongoClient,ObjectID} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
    if(err)
    {
      return console.log('Unable to connect to MongoDB');
    }
    else
    {
        return console.log('MongoDB Connencted Successfully');
    }

        const db=client.db('TodoApp')

       /*Delete Many Records*/
     db.collection('Todos').deleteMany({text:'hai'}).then((result)=>
     {
         console.log(result);
     });

     /*Delete One Record*/
     db.collection('Todos').deleteOne({ _id: new ObjectID('5c587f914660a31db442784a')}).then((result)=>
     {
         console.log(result);
     });
    
    // /*Delete Many Records*/
     db.collection('Todos').deleteMany({text:'hai'}).then((result)=>
     {
         console.log(result);
     });

    // /*Delete One Record*/
     db.collection('Todos').deleteOne({ _id: new ObjectID('5c587f914660a31db442784a')}).then((result)=>
    {
         console.log(result);
     });
    client.close();
});