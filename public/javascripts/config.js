app.config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){
  $routeProvider
  .when("/dashboard", {
    controller: "DashboardController",
    templateUrl: "templates/dashboard.html"
  })
  .otherwise({
    redirectTo: '/dashboard'
  });
}]);