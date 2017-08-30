'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var connection = require('./api/models/connection');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // Host swagger ui view
  app.use(swaggerExpress.runner.swaggerTools.swaggerUi());

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/teams']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/teams');
  }
  if (swaggerExpress.runner.swagger.paths['/matchs']) {
      console.log('try this:\ncurl http://127.0.0.1:' + port + '/matchs');
  }
});
