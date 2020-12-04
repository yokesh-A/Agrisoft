const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'D6')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'D6/test.html'));
})

app.listen(80,function(req,res){
    console.log('start server');
});