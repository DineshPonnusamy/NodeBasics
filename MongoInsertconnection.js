const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
if(err)
{
  return console.log('Unable to connect to MongoDB');
}
  console.log('Connected to MongoDB');
  const db=client.db('TodoApp')

//db.collection('Todos').insertOne({
  ///   text:'hai',
     //completed:false

//},(err,result)=>
//{
//if(err)
//{
  //return console.log('Exam Pass and Promoted',err);
//}
//console.log(JSON.stringify(result.ops,undefined,2));


db.collection('StudentsDetails').insertOne({
         Name:'Dini',
         Marks:'90',
         Status:'PASS'

       },(err,result)=>
       {
       if(err)
       {
         return console.log('Exam Pass and Promoted',err);
       }
        console.log(result.ops);
});
db.collection('CollegeDetails').insertOne({
  Name:'Dinesh',
  Marks:'90',
  Status:'Good'

},(err,result)=>
{
if(err)
{
  return console.log('Exam Pass and Promoted',err);
}
 console.log(result.ops);
});
client.close();
});
