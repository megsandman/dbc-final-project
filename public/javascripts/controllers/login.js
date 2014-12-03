app.controller("LoginController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  // if (loggedIn()){
  //   $location.path('/dashboard');
  // }
  // else {
    $scope.login = function() {
      $http.get('/login').success(function(data) {
          // $location.path('/dashboard');
          // window.location = "/#/dashboard"
      })
    }
  // }
  }
])