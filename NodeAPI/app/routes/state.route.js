module.exports = function(app) {

    var state = require('../controllers/state.controller.js');

    // Create a new state
    app.post('/state', state.create);

    // Retrieve all state
    app.get('/state', state.findAll);

    // Retrieve a single state with stateId
    app.get('/state/:stateCode', state.findOne);

    // Update a state with stateId
    app.put('/state/:stateCode', state.update);

    // Delete a state with stateId
    app.delete('/state/:stateCode', state.delete);
}