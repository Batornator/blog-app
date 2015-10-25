var post = require('../models/post'),
    express = require('express'),
    router = express.Router(),
    errorHandler = require('../helpers/errorHandler');

/**
 * GET request for posts. Filter by userId if one is passed on the queryString
 */
router.get('/', function(req, res) {
    var query = req.query,
        mogooseQuery;

    mongooseQuery = post.find();

    if (query && query.userId) {
        mongooseQuery.where('userId').equals(query.userId);
    }

    mongooseQuery.then(function(posts) {
        if (!(posts && posts.length > 0)) {
            res.status(404);
        }

        return res.json(posts);
    }, function(err) {
        // Error in find query is more likely to be caused by an internal error so send 500
        return res.status(500).json(errorHandler.getMongooseErrorObject(err));
    });

});

/**
 * POST request for posts. Creates a post model from the POST body
 */
router.post('/', function(req, res) {
    var postModel = new post(req.body);

    postModel.save().then(function(newPost) {
        return res.json(newPost);
    }, function(err) {
        // Assume validation error so bad request for simplicity
        return res.status(400).json(errorHandler.getMongooseErrorObject(err));
    });
});

module.exports = router;