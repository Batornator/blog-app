/**
 * Comment Model
 */
module.exports = (function() {

    var ModelHelper = require('../helpers/ModelHelper');

    return ModelHelper.defineMongooseModel('comment', {
        postId: {
            type: String,
            required: 'userId is required'
        },
        message: {
            type: String,
            required: 'message is required'
        }
    });
}());