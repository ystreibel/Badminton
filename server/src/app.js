'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var conf = require('./configuration.js').init();
var connection = require('./api/models/connection');
var passport = require('passport');
var passportConfiguration = require('./config/passport')(passport);
module.exports = app; // for testing

var config = {
    appRoot: __dirname,  // required config
    configDir: __dirname + '/config/',
    swaggerSecurityHandlers: {
        Bearer: (req, authOrSecDef, scopes, callback) => {
            passport.authenticate('jwt', { session: false }, (err, user, info) => {
                if(err) callback(new Error('Error in passport authenticate')); // TODO Find a way to not kill the serverif(!user) callback(new Error('Failed to authenticate oAuth token')); // TODO Find a way to not kill the server
                req.user = user;
                return callback();
            })(req, null, callback);
        }
    }
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // Host swagger ui view
  app.use(swaggerExpress.runner.swaggerTools.swaggerUi());

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/auth']) {
      console.log('try this:\ncurl http://127.0.0.1:' + port + '/auth');
  }
  if (swaggerExpress.runner.swagger.paths['/matchs']) {
      console.log('try this:\ncurl http://127.0.0.1:' + port + '/matchs');
  }
  if (swaggerExpress.runner.swagger.paths['/teams']) {
      console.log('try this:\ncurl http://127.0.0.1:' + port + '/teams');
  }
  if (swaggerExpress.runner.swagger.paths['/users']) {
      console.log('try this:\ncurl http://127.0.0.1:' + port + '/users');
  }
});
