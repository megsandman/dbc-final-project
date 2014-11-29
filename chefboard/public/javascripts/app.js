'use strict';

var app = angular.module('chefBoard', [
  'ngRoute',
  'recipesControllers'
  ]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateURL: 'partials/board.html',
        controller: 'BoardCtrl'
      });
  }]);










