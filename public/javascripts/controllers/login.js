app.controller("LoginController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  if (loggedIn()){
    $location.path('/dashboard');
  }
  else {
    $scope.login = function() {
      FB.login(function(response) {
        statusChangeCallback(response);

        if (response.status === "connected") {
          localStorage.setItem("fbUserId", response.authResponse.userID);
          console.log($location)
          // $location.path('/dashboard');
          window.location = "/#/dashboard"
        }
      }, { scope: 'public_profile,email' });
    }
  }
}])