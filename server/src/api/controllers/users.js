'use strict';

var mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    getUser: getUser,
    getUserByToken: getUserByToken,
    updateUser: updateUser,
    deleteUser: deleteUser
};

function getUsers(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users.map(user => {
            user.password = undefined;
            return user;
        }));
    });
}

function createUser(req, res) {
    var user = new User(req.body);

    user.creationDate = Date.now();
    user.creationBy = {
        _id : mongoose.Types.ObjectId(req.user._id),
        username: req.user.username
    };
    user.updateDate = Date.now();

    user.save((err, user) => {
        if (err) {
            res.send({success: false, description: err.message});
        }
        user.password = undefined;
        res.status(201).json(user);
    });

}

function getUser(req, res) {
    var id = req.swagger.params.id.value;
    User.findOne({ _id: mongoose.Types.ObjectId(id) }, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

function getUserByToken(jwt_payload, done) {
    var id = jwt_payload.id;
    User.findOne({id: id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
}

function updateUser(req, res) {
    var id = req.swagger.params.id.value;

    User.findById(id, function(err, user) {
        if(err) {
            res.send(err);
        }

        user.username = req.body.username;
        if (typeof req.body.password !== 'undefined') {
            user.password = req.body.password;
        }
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.birthDate = req.body.birthDate;
        user.gender = req.body.gender;
        user.avatar = req.body.avatar;
        user.phone = req.body.phone;
        user.expirationDate = req.body.expirationDate;
        user.updateDate = Date.now();
        user.enabled = req.body.enabled;
        user.roles = req.body.roles;
        user.team = req.body.team;

        user.save(function(err, user) {
            if(err) {
                res.send({success: false, description: err.message});
            }
            user.password = undefined;
            res.json(user);
        });

    });
}

function deleteUser(req, res) {
    var id = req.swagger.params.id.value;
    User.findOneAndRemove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) {
            res.send({success: false, description: err.message});
        }

        res.json({success: true, description: "User deleted!"});
    });
}