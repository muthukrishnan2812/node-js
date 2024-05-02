const fs = require('fs')

fs.readFile('./textfile/para.txt', (err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})
fs.appendFile('./textfile/paranew.txt', "hello guys this is my my new file, thank you " ,(err)=>{
    if(err) throw err;
    console.log('file write completed');
})
