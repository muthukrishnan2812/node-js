const { log } = require('console');
const http = require('http');
const os = require('os');
console.log('hi guys');
console.log('dir_name ->',__dirname);
console.log('filename ->',__filename);
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    // res.write('<html>')
    // res.write('<head><title> node js tutorial</title></head>')
    res.write('<body><h1> hi i am muthukrishnan, this is my first node js file</h1> <h5>have a nice day... </h5></body>')
    // res.write('</html>')
    res.end();
});
server.listen(8080);