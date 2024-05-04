const express = require('express')
const app = express()
const path = require('path')
const logEvents = require('./middleware/logEvent')
const PORT = process.env.PORT || 3000;

app.use((req,res,next) =>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`)
    console.log(`${req.method} ${req.path}`)
    next()
})
app.use(express.json());  // Middleware for parsing application/json

app.use(express.urlencoded({ extended: true }));  // Middleware for parsing application/x-www-form-urlencoded

app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

app.use('/js',express.static(path.join(__dirname,'node_modules','bootstrap','dist','js')))

app.use(express.static(path.join(__dirname,'public')))

app.use('/public',express.static(path.join(__dirname,'css')))

app.use('/employees',require('./model/employee'))

app.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})
app.get('/new-page(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','new-page.html'))
})
app.get('/about(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','about.html'))
})
app.get('/contactus(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','contactus.html'))
})
app.get('*/',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(PORT,()=>console.log(`server is running on localhost:${PORT}`))