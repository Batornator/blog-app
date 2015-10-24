var user = require('../models/User'),
    express = require('express'),
    router = express.Router(),
    errorHandler = require('../common/errorHandler');

/**
 * Get request for users
 */
router.get('/', function(req, res) {
    user.find(function(err, users) {

        if (err) {
            return res.json(errorHandler.getReadableError(err));
        }

        res.json(users);
    });
});

router.post('/', function(req, res) {
    var userModel = new user(req.body);

    userModel.save(function(err, newUser) {
        if (err) {
            return res.json(errorHandler.getReadableError(err));
        }

        return res.json(newUser);
    });
});

module.exports = router;