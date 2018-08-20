const rest = require('./rest')
const utils = require('./utils')

exports.createResource = function(payload, callback) {
    let options = {
        body: utils.convertFormToResource(payload.body),
        path: '/resources'
    };
    return rest.postJson(options, function(err, body) {
        if(!err) {
            callback(body);
        }
    });
}

exports.getResource = function(resId, callback) {
    let options = {
        body: '',
        path: '/resources/' + resId
    };

    return rest.getJSON(options, function(err,body){
        if(!err){
            callback(body);
        }
    });
}

exports.getResources = function(callback) {
    let options = {
        body: '',
        path: '/resources'
    };

    return rest.getJSON(options, function(err, body) {
        if(!err) {
            callback(body);
        }
    });
}
