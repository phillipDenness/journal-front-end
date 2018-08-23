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
      if (err) {
        return failureCallback(err);
      }else if (res.statusCode != 202) {
          return failureCallback(res.statusCode);
      }else{
        return successCallback(body);
      }
  })
}

exports.putJson = function(options,successCallback, failureCallback) {

  request({
      headers: headers,
      uri: buildUrl(options),
      method: 'PUT',
      body: options.body
    }, (err, res, body) => {
      if(err){
        console.log("Error thrown")
        failureCallback(err)
      }else if(res.statusCode != 202){
        console.log("Status error thrown")
        failureCallback(res.statusCode)
      }else {
        successCallback(body)
      }
  })
}

exports.getJson = function(options, successCallback, failureCallback) {
    request({
        headers: headers,
        uri: buildUrl(options),
        method: 'GET'
      }, (err, res, body) => { 
        if (err) {
          return failureCallback(err);
        }else if (res.statusCode != 202) {
            return failureCallback(res.statusCode);
        }else{
          return successCallback(body);
        }
    })
}

var buildUrl = function(options) {
  return config.api.protocol + '://' + config.api.host + ':' + config.api.port + options.path;
}