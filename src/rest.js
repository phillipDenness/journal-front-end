const request = require('request');
const config = require('../config');

const headers = {'Content-Type': 'application/json'}

exports.postJson = function(options, successCallback, failureCallback) {
    request({
      headers: headers,
      uri: buildUrl(options),
      method: 'POST',
      body: options.body
    }, (err, res, body) => { 
        if (err || res.statusCode != 202) {
          return failureCallback(res.statusCode);
        }else{
          return successCallback(body);
        }
  })
}

exports.getJSON = function(options, successCallback, failureCallback) {
    request({
        headers: headers,
        uri: buildUrl(options),
        method: 'GET'
      }, (err, res, body) => {
        if (err || res.statusCode != 202) {
          return failureCallback(res.statusCode);
        }else{
          return successCallback(body);
        }
      })
};

var parseJsonResponse = function(callback, err, body) {
  if (err != null) { callback(JSON.parse(err), null); }
  callback(null, JSON.parse(body));
}

var buildUrl = function(options) {
  return config.api.protocol + '://' + config.api.host + ':' + config.api.port + options.path;
}