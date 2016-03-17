var app = angular.module("reddit", ['ngMaterial', 'ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: "postsCtrl"
        })
        .state('posts', {
           url: "/posts",
           templateUrl: "views/posts.html",
           controller: "postsCtrl"
        });
});