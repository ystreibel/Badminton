var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('teams', function() {

    describe('GET /teams', function() {

      it('should return a default string', function(done) {

        request(server)
          .get('/teams')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql([{
                "id": 1,
                "name": "Sautron",
                "players": [
                    {
                        "id": 1,
                        "icon": "./assets/mon-equipe/yohann_streibel.jpg",
                        "firstname": "Yohann",
                        "lastname": "Streibel",
                        "email": "ykaribou@gmail.com",
                        "phone": "+33659854200",
                        "isCaptain": true
                    },
                    {
                        "id": 2,
                        "icon": "./assets/mon-equipe/default.png",
                        "firstname": "Kevin",
                        "lastname": "Richard",
                        "email": "kevin.richard44@gmail.com",
                        "phone": "+33659762332",
                        "isCaptain": false
                    },
                    {
                        "id": 3,
                        "icon": "./assets/mon-equipe/florian_ledan.jpg",
                        "firstname": "Florian",
                        "lastname": "Ledan",
                        "email": "florian.ledan@sfr.fr",
                        "phone": "+33671416603",
                        "isCaptain": false
                    },
                    {
                        "id": 4,
                        "icon": "./assets/mon-equipe/default.png",
                        "firstname": "Etienne",
                        "lastname": "Herluison",
                        "email": "etienne.herluison@spie.com",
                        "phone": "+33646786953",
                        "isCaptain": false
                    }
                ],
                "location": {
                    "id": 1,
                    "name": "Delta",
                    "address": "4 rue de la bourse"
                }
            }]);

            done();
          });
      });

    });

  });

});
