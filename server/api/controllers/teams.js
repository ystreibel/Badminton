'use strict';

const util = require('util'),
     db = require('../../config/db')();

module.exports = {
    getTeams: getTeams,
    createTeam: createTeam,
    getTeam: getTeam,
    updateTeam: updateTeam,
    deleteTeam: deleteTeam
};

function getTeams(req, res) {
    res.json({ teams: db.find()});
}

function createTeam(req, res) {
    res.json({success: db.save(req.body), description: "Team added to the list!"});
}

function getTeam(req, res) {
    var id = req.swagger.params.id.value;
    var team = db.find(id);
    if(team) {
        res.json(team);
    }else {
        res.status(204).send();
    }
}

function updateTeam(req, res) {
    var id = req.swagger.params.id.value;
    var team = req.body;
    if(db.update(id, team)){
        res.json({success: true, description: "Team updated!"});
    }else{
        res.status(204).send();
    }

}

function deleteTeam(req, res) {
    var id = req.swagger.params.id.value;
    if(db.remove(id)){
        res.json({success: true, description: "Team deleted!"});
    }else{
        res.status(204).send();
    }

}