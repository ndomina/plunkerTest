// Code goes here

var MainController = function($scope, $http) {
  
  $scope.message = "hello Angular!";
  
  var onUserComplete = function(response) {
    $scope.user = response.data;
  };

  $http.get("https://api.github.com/users/robconery").then(onUserComplete);

}