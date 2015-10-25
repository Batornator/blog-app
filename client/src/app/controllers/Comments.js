angular.module('Comments', ['RestHelper']).controller('CommentsController', function($scope, $location, $routeParams, $window, RestHelper) {

    init();

    // Call to the Rest API to retrieve a list of all users
    function init() {

        RestHelper.get('/comments', {
            postId: $routeParams.postId
        }).then(function(comments) {
            $scope.comments = comments.data;
        });
    }

    this.onBackClick = function() {
        $window.history.back();
    };

});