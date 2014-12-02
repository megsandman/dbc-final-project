app.controller("LoginController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  if( loggedIn() ){
    $location.path('/dashboard');

  } else {
    $scope.login = function(){
      FB.login(function(response) {
        statusChangeCallback(response);
        if (response.status === "connected");{
          localStorage.setItem("fbUserId", response.authResponse.userID);
          // $http.post('/sessions', {user: {facebook_id: response.authResponse.userID}})
          $location.path('/dashboard');
        }
        }, {scope: 'public_profile,email'});
    }

  }
}])