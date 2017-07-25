'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
                                name: {type: String, required: true},
                                players: [{
                                    icon: String,
                                    firstname: { type: String, required: true },
                                    lastname: { type: String, required: true },
                                    email: { type: String, required: true },
                                    phone: { type: String, required: true },
                                    isCaptain: { type: Boolean }
                                }],
                                place: {
                                    name: { type: String, required: true },
                                    location: {
                                        type: { type: String, required: true },
                                        coordinates: {
                                            latitude:{type: Number, required: true},
                                            longitude: {type: Number, required: true}
                                        },
                                        category: { type: String, required: true }
                                    },
                                    schedule: [{
                                        day: { type: String, required: true },
                                        start: { type: String, required: true },
                                        end: { type: String, required: true }
                                    }]
                                }
                            });

module.exports = mongoose.model('Team', TeamSchema);