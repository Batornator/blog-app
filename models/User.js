/**
 * User Model
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    userSchema = new mongoose.Schema({
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

// duplicate _id property as id using a virtual field for easier access
userSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// ensure virtual id field is serialised
userSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('user', userSchema);