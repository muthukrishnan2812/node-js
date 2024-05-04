const express = require('express');
const app = express();
const http = require('http')

app.use((req,res,next)=>{
    console.log('first middleware');
    next()
})
app.use((req,res,next)=>{
    console.log('second middleware');
    next()
})
app.use((req,res)=>{
    res.send('middleware worked')
    console.log('third middleware');
})

app.listen(3000)