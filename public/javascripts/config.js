app.config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){
  $routeProvider
  // .when('/', {
  //   window.location = "/login"
  // })
  .when("/dashboard", {
    controller: "DashboardController",
    templateUrl: "templates/dashboard.html"
  })
  .otherwise({
    redirectTo: '/dashboard'
  });
}]);