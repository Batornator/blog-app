angular.module('routes', [])
    .config([
        '$routeProvider',
        '$locationProvider',
        function($routeProvider, $locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/Users.html',
                    controller: 'UsersController as model'
                });
            $routeProvider
                .when('/user/:userId/posts', {
                    templateUrl: 'app/views/Posts.html',
                    controller: 'PostsController as model'
                });

            $routeProvider
                .when('/posts/:postId/comments', {
                    templateUrl: 'app/views/Comments.html',
                    controller: 'CommentsController as model'
                });

        }
    ]);