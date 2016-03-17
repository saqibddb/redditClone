app.controller("postsController", ["$scope", "$firebaseArray", function($scope, $firebaseArray){
    var data = new Firebase("https://reddit-clone-saqib.firebaseio.com/");
    $scope.posts = $firebaseArray(data);
    console.log($scope.posts);

    //$scope.posts.$add({
    //    content: "Straight from Webstorm",
    //    creator: "Saqib",
    //    score: 5,
    //    title: "Webstorm"
    //})
}]);