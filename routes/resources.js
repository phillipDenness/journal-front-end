const express = require('express');
const service = require('../app/service.js');

var router = express.Router();
  
  router.get('/', function (req, res) {    
    res.send('root');
  })

  router.get('/resourceId', function (req, res) {
    service.getResources(function (json) {
      res.send(json);
    });
  })

  router.post('/', function(req, res) {
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