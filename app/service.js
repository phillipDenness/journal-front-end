const rest = require('./rest')

exports.createLanguage = function(callback) {
    var options = {
        protocol: 'http',
        host: 'journaljack-env-1.un4wzhvicb.eu-west-2.elasticbeanstalk.com',
        port: 80,
        //host: 'localhost',
        //port: '8080',
        path: '/language',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
}

exports.getResources = function(callback) {
    var options = {
        protocol: 'http',
        host: 'journaljack-env-1.un4wzhvicb.eu-west-2.elasticbeanstalk.com',
        port: 80,
        //host: 'localhost',
        //port: '8080',
        path: '/resources',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return rest.getJSON(options, function(err, body) {
        if(!err) {
            callback(body);
        }
    });
}
