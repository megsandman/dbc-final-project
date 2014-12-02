app.controller("LoginController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  if( loggedIn() ){
    $location.path('/dashboard');

  } else {
    console.log('hello');

    $scope.login = function(){
      localStorage.setItem("loggedIn", "true");
      $location.path('/dashboard');
    }

  }
}])