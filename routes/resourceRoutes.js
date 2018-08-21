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
  });

router.get('/resources', function (req, res) {   
    service.getResources(function (json) {
      let resources = JSON.parse(json);
      service.getLanguages(function(languages) {
        service.getFrameworks(function(frameworks) {
          res.render('resource', {resources, languages, frameworks})
        })
      })
    })
  })

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

router.post('/resources', function(req, res) {
  console.log(req);
  // service.createResource(req, function(message) {
   res.send("Submitted");
  // });
});

module.exports = router;