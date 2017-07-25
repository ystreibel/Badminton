'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = new Schema({
                                 season: {type: Number, required: true},
                                 gender: {type: String, required: true},
                                 division: {type: Number, required: true},
                                 pools: {type: String, required: true},
                                 day: {
                                   id: {type: String, required: true},
                                   start_date: {type: Date, required: true},
                                   end_date : {type: Date, required: true}
                                 },
                                 schedule_date: {type: Date},
                                 local: {type: String, required: true},
                                 visitor: {type: String, required: true},
                                 local_score: {type: Number},
                                 visitor_score: {type: Number},
                                 base64MatchSheetImage:  {type: String},
                                 base64ReceiptImage:  {type: String}
                            });

module.exports = mongoose.model('Match', MatchSchema);