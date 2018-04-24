module.exports = function(app) {

    var person = require('../controllers/person.controller.js');

    // Create a new person
    app.post('/person', person.create);

    // Retrieve all person
    app.get('/person', person.findAll);

    // Retrieve a single person with personId
    app.get('/person/:personId', person.findOne);

    // Update a person with personId
    app.put('/person/:personId', person.update);

    // Delete a person with personId
    app.delete('/person/:personId', person.delete);
}