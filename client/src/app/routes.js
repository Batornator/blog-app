angular.module('routes', [])
    .config([
        '$routeProvider',
        '$locationProvider',
        function($routeProvider, $locationProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: 'src/app/views/Users.html',
                    controller: 'UsersController as model'
                });
            $routeProvider
                .when('/src', {
                    templateUrl: 'src/app/views/Users.html',
                    controller: 'UsersController as model'
                });


            $routeProvider
                .when('/src/user/:userId/posts', {
                    templateUrl: 'src/app/views/Posts.html',
                    controller: 'PostsController as model'
                });

            $routeProvider
                .when('/src/posts/:postId/comments', {
                    templateUrl: 'src/app/views/Comments.html',
                    controller: 'CommentsController as model'
                });

            $locationProvider.html5Mode(true);

        }
    ]);