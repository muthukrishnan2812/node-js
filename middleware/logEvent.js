const { v4 } = require("uuid");
const { format } = require("date-fns");
const fsPromises = require("fs").promises;
const path = require("path");
const fs = require('fs')

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "dd-MM-yyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${v4()}\t${message}\n\n`;
  console.log(logItem);
  try{
    if(!fs.existsSync(path.join(__dirname,'..','logs'))){
        await fsPromises.mkdir(path.join(__dirname,'..','logs'))
    }
    await fsPromises.appendFile(path.join(__dirname,'..','logs','eventFile.txt'),logItem)
  }catch(err){
    console.log(err);
  }
};
module.exports =logEvents;
