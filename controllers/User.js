var user = require('../models/user'),
    express = require('express'),
    router = express.Router(),
    errorHandler = require('../helpers/errorHandler');

/**
 * Get request for users
 */
router.get('/', function(req, res) {
    user.find().then(function(users) {
        return res.json(users);
    }, function(err) {
        return res.json(errorHandler.getResponseObject(err));
    });
});

router.post('/', function(req, res) {
    var userModel = new user(req.body);

    userModel.save().then(function(newUser) {
        return res.json(newUser);
    }, function(err) {
        //Assume bad request for simplicitys sake
        return res.status(400).json(errorHandler.getResponseObject(err));
    });
});

module.exports = router;