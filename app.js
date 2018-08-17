const express = require('express');
const resources = require('./routes/resources.js');
const config = require('./config');

const app = express();
app.set('port', config.app.port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: false});
app.set('views', __dirname + '/views');

exports.init = function() {
    app.use('/resources', resources);

app.listen(config.app.port, () => console.log('App listening on port 3000!'))
};
