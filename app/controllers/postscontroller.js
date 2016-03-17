app.controller("postsCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray){
    var data = new Firebase("https://reddit-clone-saqib.firebaseio.com/");
    $scope.posts = $firebaseArray(data);
    console.log($scope.posts);
}]);