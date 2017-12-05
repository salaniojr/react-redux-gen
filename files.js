var path  = require('path');

const TEMPLATE_FOLDER = 'template';
const BASE_DIR = __dirname;

function getTemplatePath() {
    return BASE_DIR + path.sep + TEMPLATE_FOLDER + path.sep;
}

module.exports = {
    getTemplatePath: getTemplatePath
};

