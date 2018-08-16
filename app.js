const express = require('express')
const service = require('./service')
const app = express()

app.get('/', function (req, res) {    
    var json = service.getResources(function(json) {
        res.send(json);
    });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))