require('dotenv').config();

var express = require('express');
var app = express();

require('./config/express')(app);
require('./config/rollbar')(app);
require('./config/db')(app);
require('./config/routes')(app);
require('./config/cron')(app);

module.exports = app;
