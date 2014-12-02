app.config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    controller: "LoginController",
    templateUrl: "templates/login.html"
  })
  .when("/dashboard", {
    controller: "DashboardController",
    templateUrl: "templates/dashboard.html"
  })
  .otherwise({
    redirectTo: '/'
  });
}]);