'use strict';

const jwt = require('jwt-simple');
const conf = require('../../configuration.js');
const User = require('../models/user');

module.exports = {
    createAuthentication: createAuthentication
};

function createAuthentication(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({ username: username }, function(err, user) {
        if (err) {
            res.status(err.status).send({message: err.message});
        }
        if (!user) {
            res.status(403).send({message: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    const token = jwt.encode(user, conf.get('secret'));
                    // return the information including token as JSON
                    res.json({success: true, token: token});
                } else {
                    res.status(403).send({message: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
}