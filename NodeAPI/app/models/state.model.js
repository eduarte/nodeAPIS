var mongoose = require('mongoose');
mongoose.set('debug', true);

var stateSchema = mongoose.Schema({
    stateCode: String,
    province: String,
    region: String,
    neighbor: String
});

module.exports = mongoose.model('State', stateSchema);