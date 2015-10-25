module.exports = (function() {

    var mongoose = require('mongoose');

    return {

        /**
         * Takes a string model name and a mongoose schema definition. Adds virtual ID field
         */
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

}());