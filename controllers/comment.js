var comment = require('../models/comment'),
    express = require('express'),
    router = express.Router(),
    errorHandler = require('../helpers/errorHandler');

/**
 * Get request for posts
 */
router.get('/', function(req, res) {
    var query = req.query,
        mogooseQuery;

    mongooseQuery = comment.find();

    if (query && query.postId) {
        mongooseQuery.where('postId').equals(query.postId);
    }

    mongooseQuery.then(function(comments) {
        if (!(comments && comments.length > 0)) {
            res.status(404);
        }

        return res.json(comments);
    }, function(err) {
        // Error in find query is more likely to be caused by an internal error so send 500
        return res.status(500).json(errorHandler.getResponseObject(err));
    });

});

router.post('/', function(req, res) {
    var commentModel = new comment(req.body);

    commentModel.save().then(function(newComment) {
        return res.json(newComment);
    }, function(err) {
        // Assume validation error so bad request for simplicity
        return res.status(400).json(errorHandler.getResponseObject(err));
    });
});

module.exports = router;