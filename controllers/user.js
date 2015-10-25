var user = require('../models/user'),
    express = require('express'),
    router = express.Router(),
    errorHandler = require('../helpers/errorHandler');

/**
 * GET request for users, returns all users
 */
router.get('/', function(req, res) {
    user.find().then(function(users) {
        return res.json(users);
    }, function(err) {
        return res.json(errorHandler.getMongooseErrorObject(err));
    });
});

/**
 * POST request for users. Creates a user model from the POST body
 */
router.post('/', function(req, res) {
    var userModel = new user(req.body);

    userModel.save().then(function(newUser) {
        return res.json(newUser);
    }, function(err) {
        //Assume bad request for simplicitys sake
        return res.status(400).json(errorHandler.getMongooseErrorObject(err));
    });
});

module.exports = router;