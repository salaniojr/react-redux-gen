var fs = require("fs-extra");
var mustache = require('mustache');
var files = require('./files');

const ENCODING = 'utf-8';

function runner() {
    fs.readFile(files.getTemplatePath() + "action-template.js", ENCODING, function(err, data) {
        if (err) {
            throw err;
        }

        console.log(mustache.render(data, {functionName: 'savePeca'}));
    });
}

module.exports = runner;
