'use strict';


// var strava_call = "https://strva.herokuapp.com/api/v1/teams"

angular.module('myApp.teams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {
    templateUrl: 'components/teams/teams.html',
    controller: 'TeamsCtrl'
  });
}])

.controller('TeamsCtrl', ['$scope', '$templateCache','$http' , function ($scope, $templateCache, $http) {
  $scope.description = "Teams";


  returnedInfo = $http.get(strava_call).
  success(function(data, status, headers, config){
    // this callback will be called asynchronously
    // when the response is available
    var teams_list=[]
    for (var i = 0; i < data.length; i++){
      teams_list.push(data[i]);
    }

    console.log(teams_list);
    $scope.teams = teams_list;

    }).
    error(function(data, status, headers, config){
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.teams = "PLAYA _ PLAYAS";
    })

}
])

.run(function ($templateCache){
        $templateCache.put("'components/teams/teams.html'");

    });


