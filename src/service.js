const rest = require('./rest')
const utils = require('./utils')

exports.getFrameworks = function(callback) {
    var options = {
        body: '',
        path: '/frameworks'
    };

    const promise = new Promise(function(successCallback, failureCallback) {
        rest.getJSON(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(JSON.parse(result));
    }, function(err) {
        console.log(err);
        callback(err);
    })
}

exports.getLanguages = function(callback) {
    var options = {
        body: '',
        path: '/languages'
    };

    const promise = new Promise(function(successCallback, failureCallback) {
        rest.getJSON(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(JSON.parse(result));
    }, function(err) {
        console.log(err);
        callback(err);
    })
}

exports.createResource = function(payload, callback) {
    let options = {
        body: utils.convertFormToResource(payload.body),
        path: '/resources'
    };

    const promise = new Promise(function(successCallback, failureCallback) {
        rest.postJson(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(result);
    }, function(err) {
        console.log(err);
        callback(err);
    })
}

exports.editResource = function(payload, callback) {
    let options = {
        body: utils.convertFormToResources(payload.body),
        path: '/resources'
    };

    const promise = new Promise(function(successCallback, failureCallback) {
        rest.postJson(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(result);
    }, function(err) {
        console.log(err);
        callback(err);
    })
}

exports.getResources = function(callback) {
    let options = {
        body: '',
        path: '/resources'
    };
    const promise = new Promise(function(successCallback, failureCallback) {
        rest.getJSON(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(result);
    }, function(err) {
        console.log(err);
        callback(err);
    })
}
