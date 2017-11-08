const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    UserController = require('../api/controllers/users'),
    conf = require('../configuration.js');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = conf.get('secret');
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        UserController.getUserByToken(jwt_payload, done);
    }));
};