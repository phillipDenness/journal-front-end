const service = require('../src/service.js');
const express = require('express');
const path = require('path');
var router = express.Router();

router.get('/', function (req, res) {    
    res.send('Homepage');
  })

router.get('/resources', function (req, res) {    
service.getResources(function (json) {
    res.send(json);
    });
  })


router.get('/resources/create', function (req, res) {    
    res.sendFile(path.join(__dirname, '../public', 'resourceform.html'));
  })

router.post('/resources/create', function(req, res) {
let payload = JSON.stringify({
    "languageName": "Java",
    "frameworkName": "Spring",
    "name": "Foo44",
    "url": "foo.com"
    });

service.createResource(payload, function(resourceId) {
    res.send(resourceId);
  })

});

module.exports = router;