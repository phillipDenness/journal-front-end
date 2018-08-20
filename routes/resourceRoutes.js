const service = require('../src/service.js');
const express = require('express');
const path = require('path');
var router = express.Router();

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

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

router.post('/resources/submit', function(req, res) {
  service.createResource(req, function(message){
   res.send(message);
  });
});

module.exports = router;