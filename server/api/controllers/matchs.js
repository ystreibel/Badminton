'use strict';

var mongoose = require('mongoose');
const Match = require('../models/match');

module.exports = {
    getMatchs: getMatchs,
    createMatch: createMatch,
    getMatch: getMatch,
    updateMatch: updateMatch,
    deleteMatch: deleteMatch
};

function getMatchs(req, res) {
    Match.find({}, function(err, matchs) {
        if (err) {
            res.send(err);
        }
        res.json({ matchs: matchs});
    });
}

function createMatch(req, res) {
    var match = new Match(req.body);
    match.save(err => {
        if (err) {
            res.send({success: false, description: err});
        }
        res.json({success: true, description: "Match added to the list!"});
    });

}

function getMatch(req, res) {
    var id = req.swagger.params.id.value;
    Match.find({ _id: mongoose.Types.ObjectId(id) }, function(err, match) {
        if (err) {
            res.send(err);
        }
        res.json(match);
    });
}

function updateMatch(req, res) {
    var id = req.swagger.params.id.value;

    Match.findById(id, function(err, match) {
        if(err) {
            res.send(err);
        }

        match.season = req.body.season;
        match.gender = req.body.gender;
        match.division = req.body.division;
        match.pools = req.body.pools;
        match.day = req.body.day;
        match.schedule_date = req.body.schedule_date;
        match.local = req.body.local;
        match.visitor = req.body.visitor;
        match.local_score = req.body.local_score;
        match.visitor_score = req.body.visitor_score;
        match.base64MatchSheetImage = req.body.base64MatchSheetImage;
        match.base64ReceiptImage = req.body.base64ReceiptImage;

        match.save(function(err) {
            if(err) {
                res.send(err);
            }

            res.json({success: true, description: "Match updated!"});
        });

    });
}

function deleteMatch(req, res) {
    var id = req.swagger.params.id.value;
    Match.findOneAndRemove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) {
            res.send({success: false, description: err});
        }

        res.json({success: true, description: "Match deleted!"});
    });
}