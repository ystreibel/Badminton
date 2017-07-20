'use strict;'
//Include crypto to generate the team id
var crypto = require('crypto');

module.exports = function() {
    return {
        teams : [],
        /*
         * Save the team inside the "db".
         */
        save: function (team) {
            team.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.teams.push(team);
            return true;
        },
        /*
         * Update a team with the given id
         */
        update: function (id, team) {
            var teamIndex = this.teams.findIndex(element => {
                    return element.id === id;
                });
            if(teamIndex !== -1) {
                this.teams[teamIndex].name = team.name;
                this.teams[teamIndex].players = team.players;
                this.teams[teamIndex].place = team.place;
                return true;
            }else {
                return false;
            }
        },
        /*
         * Retrieve a team with a given id or return all the teams if the id is undefined.
         */
        find: function(id) {
            if(id) {
                return this.teams.find(element => {
                    return element.id === id;
            });
            }else {
                return this.teams;
            }
        },
        /*
         * Delete a team with the given id.
         */
        remove: function (id) {
            var found = false;
            this.teams = this.teams.filter(element => {
                if(element.id === id) {
                found = true;
            }else {
                return element.id !== id;
            }
        });
            return found;
        }
    };
};  