const rest = require('../src/rest')
const base = 'http://localhost:3000';

exports.base = base;
exports.deleteResource = function(resourceName) {
    let options = {
        path: '/resources/' + resourceName
    };
    const promise = new Promise(function(successCallback, failureCallback) {
        rest.deleteJson(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
    }, function(err) {
        console.log(err);
    })
}