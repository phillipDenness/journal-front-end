const rest = require('./rest')
const utils = require('./utils')

exports.getFrameworks = function(callback) {
    var options = {
        body: '',
        path: '/frameworks'
    };

    const promise = new Promise(function(successCallback, failureCallback) {
        rest.getJson(options, successCallback, failureCallback);
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
        rest.getJson(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(JSON.parse(result));
    }, function(err) {
        console.log(err);
        callback(err);
    })
}

exports.sortResource = function (payload, callback) {
    let newResources = payload.body.resources
    for(let i = 0;i < newResources.length;i++){
        updateResource(newResources[i])
    }
    callback("Done")
}

updateResource = function(payload) {
    console.log(payload)
    let resource = utils.convertUpdateFormToResource(payload)

    let options = {
        body: JSON.stringify(resource),
        path: '/resources/' +  resource.name
    };
    console.log("##############")
    console.log(options.body)
    console.log(options.path)

    const promise = new Promise(function(successCallback, failureCallback) {
        rest.putJson(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(result);
    }, function(err) {
        console.log(err);
        callback(err);
    })
}

exports.createResource = function(payload, callback) {
    let resource = utils.convertCreateFormToResource(payload.body)

    let options = {
        body: JSON.stringify(resource),
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
        rest.getJson(options, successCallback, failureCallback);
    });
        
    promise.then(function(result) {
        console.log(result);
        callback(result);
    }, function(err) {
        console.log(err);
        callback(err);
    })
}
