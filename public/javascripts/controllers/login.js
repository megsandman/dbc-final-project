app.controller("LoginController", ["$scope", "http", function($scope, $http) {
  if( loggedIn() ){
    $location.path('/dashboard');
  } else {
    console.log('hello');
  }
}])