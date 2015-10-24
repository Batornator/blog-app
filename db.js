var mongoose = require('mongoose');

module.exports = {

    /**
     * Connect to mongo
     *
     * @param {string} url the url of the database
     * @param {function} cb callback function on successful/failed connection
     */
    connect: function(url, cb) {
        mongoose.connect(url, function(err) {
            cb(err);
        });
    },

    /**
     * Output basic database information
     */
    getDatabaseInfo: function() {
        mongoose.connection.db.listCollections().toArray(function(err, collections) {
            console.log('Connected to: ' + mongoose.connection.name);
            console.log('Number of collections: ' + collections.length);
        });
    }
};