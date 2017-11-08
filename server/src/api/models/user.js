'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
                                username: {type: String, unique: true, required: true},
                                password: {type: String, required: true},
                                firstname: { type: String, required: true },
                                lastname: { type: String, required: true },
                                birthDate: {type: Date},
                                gender: {type: String, enum: ["F", "M"]},
                                avatar: String,
                                phone: { type: String, required: true },
                                creationDate: {type: Date, default: Date.now, required: true},
                                creationBy: {
                                    type: {
                                        _id: { type: Schema.Types.ObjectId, ref: 'user', required: true },
                                        username: { type: String, required: true }
                                    }
                                },
                                expirationDate: {type: Date},
                                updateDate: {type: Date, required: true},
                                enabled: {type: Boolean, required: true},
                                roles: {
                                    type: [String], enum: ["USER", "ADMIN"], required: true
                                },
                                team: { type: Schema.Types.ObjectId, ref: 'team'}
                            });

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);