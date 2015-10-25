var mongoose = require('mongoose');

module.exports = {

    defineMongooseModel: function(modelName, schemaObj) {
        var schema = new mongoose.Schema(schemaObj);

        // duplicate _id property as id using a virtual field for easier access
        schema.virtual('id').get(function() {
            return this._id.toHexString();
        });

        // ensure virtual id field is serialised
        schema.set('toJSON', {
            virtuals: true
        });

        return mongoose.model(modelName, schema);
    }

};