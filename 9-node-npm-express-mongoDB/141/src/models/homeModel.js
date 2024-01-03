const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
titulo: {type: String, required: true},
descricao: {type: String}
});

const homeModel = mongoose.model('Home', homeSchema);
