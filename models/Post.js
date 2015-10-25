/**
 * Post Model
 */
var ModelHelper = require('../helpers/ModelHelper');

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