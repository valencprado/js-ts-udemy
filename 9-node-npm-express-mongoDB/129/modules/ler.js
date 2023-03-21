const fs = require('fs').promises;

module.exports = (caminhos) =>   fs.readFile(caminhos, 'utf-8');
