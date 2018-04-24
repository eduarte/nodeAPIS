var mongoose = require('mongoose');
mongoose.set('debug', true);

var personSchema = mongoose.Schema({
    flastName: String,
    slastName: String,
    stateCode: String,
    expDate: String,
    name: String,
    code: String,
    personID: String,
    gender: String
});

module.exports = mongoose.model('Person', personSchema);