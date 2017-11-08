'use strict';
var nconf = require('nconf');
var util = require('util');

require('colors');

var pathFromDefault = __dirname + '/configuration.json';

module.exports.init = function() {

    nconf.env({
        separator: '_',
        whitelist: ['mongoURL', 'secret']
    });

    nconf.file('default',pathFromDefault);
    console.log(util.format('Default Node Configuration loaded').cyan);

    return module.exports;
};

module.exports.get = function(key) {
    return nconf.get(key);
};

