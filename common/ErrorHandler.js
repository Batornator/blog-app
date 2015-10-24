module.exports = {

    getReadableError: function(err) {
        var errors = err.errors,
            errorsArray = [],
            ret = {
                errors: errorsArray
            },
            errIndex;

        // Log out the full error object including stack trace for debugging purposes
        console.error(err);

        for (errIndex in errors) {
            // Only need message, error type and value for client
            errorsArray.push({
                message: errors[errIndex].message,
                type: errors[errIndex].name,
                value: errors[errIndex].value
            });
        }
        return ret;
    }

};