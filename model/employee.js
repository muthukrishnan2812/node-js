const express = require('express')
const router = express.Router();
const path = require('path');

data ={}
data.employees=require('./employees.json');

router.route('/')
    .get((req,res)=>{
        res.json(data.employees)
    })
    .post((req,res)=>{
        res.json({
            "firstName":req.body.firstName,
            "lastName":req.body.lastName
        })
    })

module.exports = router