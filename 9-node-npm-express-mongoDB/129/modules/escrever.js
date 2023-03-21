const fs = require('fs').promises;

module.exports = (caminhos, dados) => {
    fs.writeFile(caminhos, dados, {flag: 'w'});

};

