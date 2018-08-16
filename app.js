const express = require('express')
const routes = require('./routes')
const app = express()

exports.init = function() {
    app.get('/', function (req, res) {    
        var json = service.getResources(function(json) {
            res.send(json);
        });
    })
    
    app.get('/resources', function (req, res) {
        var json = service.getResources(function (json) {
            res.send(json);
        });
    })

app.listen(3000, () => console.log('Example app listening on port 3000!'))
};
