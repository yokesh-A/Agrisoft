const express = require('express');

const path = require('path');

const open = require('open');

const app = express();

app.use(express.static(path.join(__dirname,'agro')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'agro/index.html'));
})

app.get('/app',function(req,res){
    res.sendFile(path.join(__dirname,'app/index.html'));
})


const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const results = Object.create(null); // or just '{}', an empty object
for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}


app.listen(80,function(req,res){
    open('http://'+results['Local Area Connection'][0]);
    console.log('Server Starts in','http://'+results['Local Area Connection'][0]);
});