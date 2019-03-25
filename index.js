const express = require('express');
const app = express();

app.get('/',(req,res)=>
{
   res.send('Response send success');
});

app.get('/api/Customers',(req,res)=>
{
   res.send([1,2,3]);
});

app.listen(3000);
    console.log('Listening On Port 3000...')
