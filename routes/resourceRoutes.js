const service = require('../src/service.js');
const express = require('express');
const path = require('path');
const router = express.Router();

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get('/', function (req, res) {    
  res.render('index',
  { title : 'Home' })
  })

router.get('/resources', function (req, res) {   
  if(req.query.id != null){
    console.log("id: " + req.query.id);
    service.getResource(req.query.id, function (json) {
      res.send(json);
      });
  } else {
    console.log("no id");
    service.getResources(function (json) {
      res.send(json);
      });
    }
  });

router.get('/resources/create', function (req, res) {
  service.getLanguages(function(languages) {
      service.getFrameworks(function(frameworks) {
        res.render('resourceform', {languages, frameworks})
      })
    });
  })

router.post('/resources/create', function(req, res) {
  service.createResource(req, function(message) {
   res.send(message);
  });
});

module.exports = router;