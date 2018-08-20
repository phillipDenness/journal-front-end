const request = require('request');
const config = require('../config');

const headers = {'Content-Type': 'application/json'}

exports.postJson = function(options, callback) {
    request({
      headers: headers,
      uri: buildUrl(options),
      method: 'POST',
      body: options.body
    }, (err, res, body) => {
      parseJsonResponse(callback, err, body);
    });
}

exports.getJSON = function(options, callback) {
    request({
        headers: headers,
        uri: buildUrl(options),
        method: 'GET'
      }, (err, res, body) => {
        parseJsonResponse(callback, err, body);
      })
};

var parseJsonResponse = function(callback, err, body) {
  if (err) { callback(JSON.parse(err), null); }
  callback(null, JSON.parse(body));
}

var buildUrl = function(options) {
  return config.api.protocol + '://' + config.api.host + ':' + config.api.port + options.path;
}