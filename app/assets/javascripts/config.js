app.config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    controller: "LoginController",
    templateUrl: "../../views/application/templates/login.html"
  })
  .when("/dashboard", {
    controller: "DashboardController",
    templateUrl: "../../views/application/templates/dashboard.html"
  });
}]);