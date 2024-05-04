const fs = require('fs')
const path = require ('path');
const fsPromises = require('fs').promises

 fileOps = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'textfile','para.txt'))
        console.log(data.toString());
        await fsPromises.writeFile(path.join(__dirname,'textfile','write.txt'),' new write file form node js write file')
        console.log('new file writed successfully');
        await fsPromises.appendFile(path.join(__dirname,'textfile','write.txt'),'added new things for append file ')
        console.log('file apppend successfully');
        await fsPromises.rename(path.join(__dirname,'textfile','write.txt'),path.join(__dirname,'textfile','mk.txt'))
    }catch(err){
        console.error(err);
    }
} 
fileOps()
