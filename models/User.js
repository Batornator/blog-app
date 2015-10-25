/**
 * User Model
 */
var ModelHelper = require('../helpers/ModelHelper');

module.exports = ModelHelper.defineMongooseModel('user', {
    name: {
        type: String,
        required: 'Name is required'
    },
    username: {
        type: String,
        required: 'Username is required'
    },
    email: {
        type: String,
        required: 'Email is required',
        validate: {
            validator: function(v) {
                // Test for valid email address format
                var emailAddressRe = /^(")?(?:[^\."])(?:(?:[\.])?(?:[\w\-!#$%&'*+\/=?\^_`{|}~]))*\1@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/;
                return emailAddressRe.test(v);
            },
            message: '{VALUE} is not a valid email address'
        }
    }
});