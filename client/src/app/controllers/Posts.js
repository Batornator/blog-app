angular.module('Posts', ['RestHelper']).controller('PostsController', function($scope, $location, $routeParams, $window, RestHelper) {

    init();

    // Call to the Rest API to retrieve a list of all users
    function init() {

        RestHelper.get('/posts?userId=' + $routeParams.userId).then(function(posts) {
            $scope.posts = posts.data;
        });
    }

    this.onPostClick = function(postId) {
        $location.path('/src/posts/' + postId + '/comments');
    };

    this.onBackClick = function() {
        $window.history.back();
    };

});