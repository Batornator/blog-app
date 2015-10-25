angular.module('Users', ['RestHelper']).controller('UsersController', function($scope, $location, RestHelper) {

    init();

    // Call to the Rest API to retrieve a list of all users
    function init() {
        RestHelper.get('/users').then(function(users) {
            $scope.users = users.data;
        });
    }

    this.onUserClick = function(userId) {
        $location.path('/src/user/' + userId + '/posts');
    };

});