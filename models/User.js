/**
 * User Model
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    userSchema = new mongoose.Schema({
        name: String,
        username: String,
        email: String
    });

module.exports = mongoose.model('user', userSchema);