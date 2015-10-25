angular.module('RestHelper', []).factory('RestHelper', ['$http', function($http) {

    return {

        // Execute a basic rest request using the passed url & parameters.
        // $http returns a promise so no need for a callback here
        get: function(url, params) {

            return $http({
                method: 'GET',
                url: url,
                params: params
            });
        }

    };

}]);