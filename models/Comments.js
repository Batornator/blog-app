/**
 * Comment Model
 */
var ModelHelper = require('../common/ModelHelper');

module.exports = ModelHelper.defineMongooseModel('comment', {
    postId: {
        type: String,
        required: 'userId is required'
    },
    message: {
        type: String,
        required: 'message is required'
    }
});