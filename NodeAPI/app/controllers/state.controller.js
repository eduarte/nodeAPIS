var state = require('../models/state.model.js');

exports.create = function(req, res) {
    if(!req.body.content) {
     return res.status(400).send({message: "State can not be empty"});
 }

 var State = new state({stateCode: req.body.stateCode, province: req.body.province, region: req.body.region, neighbor: req.body.neighbor});

 state.save(function(err, data) {
     if(err) {
         console.log(err);
         res.status(500).send({message: "Some error occurred while creating the Note."});
     } else {
         res.send(data);
     }
 });
};


exports.findAll = function(req, res) {

    state.find(function(err, data){
       if(err) {
           console.log(err);
           res.status(500).send({message: "Some error occurred while retrieving Distelecs."});
       } else {
           res.send(data);
       }
   });
};

exports.findOne = function(req, res) {
   dis.findOne({'stateCode' : req.params.stateCode }, function(err, data) {
       if(err) {
           console.log(err);
           if(err.kind === 'ObjectId') {
               return res.status(404).send({message: "Distelec not found with stateCode " + req.params.stateCode});                
           }
           return res.status(500).send({message: "Error retrieving Distelec with stateCode " + req.params.stateCode});
       } 

       if(!data) {
           return res.status(404).send({message: "Distelec not found with stateCode " + req.params.stateCode});            
       }

       res.send(data);
   });

};

exports.update = function(req, res) {
   // Update a Distelec identified by the DistelecId in the request

};

exports.delete = function(req, res) {
   // Delete a Distelec with the specified noteId in the request

};