/**
 * Post Model
 */
var ModelHelper = require('../common/ModelHelper');

module.exports = ModelHelper.defineMongooseModel('post', {
    userId: {
        type: String,
        required: 'userId is required'
    },
    title: {
        type: String,
        required: 'title is required'
    },
    message: {
        type: String,
        required: 'message is required'
    }
});