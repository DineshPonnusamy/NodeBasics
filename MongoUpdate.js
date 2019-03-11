const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
    if(err)
    {
      return console.log('Unable to connect to MongoDB');
    }
    else
    {
        return console.log('MongoDB Connencted dsad Successfully');
    }
         const db=client.db('TodoApp')
        db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5c587f914660a31db442784a')            
        },
       {           
        $set:
            {
                text:'Dinesh'
            }
            },
            {
                returnOriginal: false
            }).then((result)=>
            {
                console.log(result);
            });            
        });