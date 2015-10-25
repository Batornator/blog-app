module.exports = {

    /**
     * Takes a mongoose error object and produces an object containing an array of errors suitable for output
     */
    getResponseObject: function(err) {
        var errors = err.errors,
            errorsArray = [],
            ret = {
                errors: errorsArray
            },
            errIndex, errorObj;

        // Log out the full error object including stack trace for debugging purposes
        console.error(err);

        for (errIndex in errors) {
            errorObj = errors[errIndex];
            if (errors.hasOwnProperty(errIndex)) {
                // Only need message, error type and value for client
                errorsArray.push({
                    message: errorObj.message,
                    type: errorObj.name,
                    value: errorObj.value
                });
            }
        }
        return ret;
    }

};