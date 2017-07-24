'use strict';

var mongoose = require('mongoose');
const Team = require('../models/team');

module.exports = {
    getTeams: getTeams,
    createTeam: createTeam,
    getTeam: getTeam,
    updateTeam: updateTeam,
    deleteTeam: deleteTeam
};

function getTeams(req, res) {
    Team.find({}, function(err, teams) {
        if (err) {
            res.send(err);
        }
        res.json({ teams: teams});
    });
}

function createTeam(req, res) {
    var team = new Team(req.body);
    team.save(err => {
        if (err) {
            res.send({success: false, description: err});
        }
        res.json({success: true, description: "Team added to the list!"});
    });

}

function getTeam(req, res) {
    var id = req.swagger.params.id.value;
    Team.find({ _id: mongoose.Types.ObjectId(id) }, function(err, team) {
        if (err) {
            res.send(err);
        }
        res.json(team);
    });
}

function updateTeam(req, res) {
    var id = req.swagger.params.id.value;

    Team.findById(id, function(err, team) {
        if(err) {
            res.send(err);
        }

        team.name = req.body.name;
        team.players = req.body.players;
        team.place = req.body.place;

        team.save(function(err) {
            if(err) {
                res.send(err);
            }

            res.json({success: true, description: "Team updated!"});
        });

    });
}

function deleteTeam(req, res) {
    var id = req.swagger.params.id.value;
    Team.findOneAndRemove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) {
            res.send({success: false, description: err});
        }

        res.json({success: true, description: "Team deleted!"});
    });
}