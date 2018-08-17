const rest = require('./rest')

exports.createResource = function(payload, callback) {
    var options = {
        body: payload,
        path: '/resources'
    };

    return rest.postJson(options, function(err, body) {
        if(!err) {
            callback(body);
        }
    });
}

exports.getResources = function(callback) {
    var options = {
        body: '',
        path: '/resources'
    };

    return rest.getJSON(options, function(err, body) {
        if(!err) {
            callback(body);
        }
    });
}
