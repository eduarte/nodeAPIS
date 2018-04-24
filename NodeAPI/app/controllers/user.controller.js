var user = require('../models/user.model.js');
var jwt = require('jsonwebtoken');
var config = require('../config.js');

exports.login = function(req, res){
    /*
         * Check if the username and password is correct
         */
        if( req.body.username === 'admin' && req.body.password === 'admin' ) {
            res.json({
                id: 1,
                username: 'admin',
                jwt: jwt.sign({
                    id: 1,
                }, config.JWT_SECRET, { expiresIn: 60*60 })
            });
        } else {
            /*
             * If the username or password was wrong, return 401 ( Unauthorized )
             * status code and JSON error message
             */
            res.status(401).json({
                error: {
                    message: 'Wrong username or password!'
                }
            });
        }
        return router;
}

module.exports = function(router) {
    router.post('/login', function(req, res) {
        /*
         * Check if the username and password is correct
         */
        if( req.body.username === 'admin' && req.body.password === 'admin' ) {
            res.json({
                id: 1,
                username: 'admin',
                jwt: jwt.sign({
                    id: 1,
                }, config.JWT_SECRET, { expiresIn: 60*60 })
            });
        } else {
            /*
             * If the username or password was wrong, return 401 ( Unauthorized )
             * status code and JSON error message
             */
            res.status(401).json({
                error: {
                    message: 'Wrong username or password!'
                }
            });
        }
    });

    return router;
}




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
