const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);
fs.readdir('./',function(err,result){
    if(err) console.log('error',err);
    else console.log('result',result);
})