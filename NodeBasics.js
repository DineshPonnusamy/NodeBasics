console.log('Hai');  
console.log('How are u');

setTimeout(function()
{
   console.log('Dinesh123')
});

function Schedule(Name1,Name2)
{
   console.log(Name1,Name2);
   console.log(Name2,Name1);
}


var Name1 = function(num) {
   return num * 2;
}

var test = Name1(8);

console.log(test);

setTimeout(function(){Schedule(Name1);},1000);

Schedule('Dinesh12'); 


const log = require('./logger');

// console.log(log);
log('LoggerNewMessage');


const path = require('path');

var PathName = path.parse(__filename);

console.log(PathName);

const os = require('os');

var sysMemeory = os.totalmem();
var FreeMemory = os.freemem();


// console.log('TotalMemory:' +sysMemeory);
// console.log('SpaceMemory:' +FreeMemory);

console.log(`TotalMemory: ${sysMemeory}`);
console.log(`SpaceMemory: ${FreeMemory}`);

 const fs= require('fs');

 fs.readdir('./',function(err,files)
 {
 if(err)console.log('Error',err);
 else console.log('Result',files);
 });









