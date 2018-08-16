const request = require('request');

exports.getJSON = function(options, callback) {
    request({
        headers: {
          'Content-Type': 'application/json'
        },
        uri: buildUrl(options),
        method: options.method
      }, (err, res, body) => {

        if (err) { callback(JSON.parse(err), null); }

        callback(null, JSON.parse(body));
      });
};

var buildUrl = function(options) {
    var url = options.protocol + '://' + options.host + ':' + options.port + '/' + options.path;
    return url;
}