'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.profile',
//   'myApp.teams',
//   'myApp.competition',
//   'headerBar'

//  ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/profile'});
// }]);

angular.module('Chefboard', []);

angular.module('Chefboard').controller('BoardController', function ($scope) {
  $scope.recipes =[
    {
      title: "Chocolate Chip Cookies",
      source_url: "http://www.nytimes.com/2008/07/09/dining/091crex.html?_r=0",
      img_url: "../assets/images/chocolate-chip-cookie.jpg",
      category_id: 1,
      user_id: 1
    },
    {
      title: "Pizza Dough",
      source_url: "http://www.foodnetwork.com/recipes/bobby-flay/pizza-dough-recipe.html",
      img_url: "../assets/images/pizza-dough.jpeg",
      category_id: 2,
      user_id: 1
    },
    {
      title: "Kale and Citrus Salad",
      source_url: "http://www.saveur.com/article/Recipes/Winter-Kale-and-Citrus-Salad",
      img_url: "../assets/images/kale-citrus-salad.jpg",
      category_id: 3,
      user_id: 1
    },
    {
      title: "Oatmeal",
      source_url: "http://www.foodnetwork.com/recipes/ina-garten/sunday-morning-oatmeal-recipe.html",
      img_url: "../assets/images/oatmeal.jpeg",
      category_id: 4,
      user_id: 1
    },
    {
      title: "Sangria",
      source_url: "http://www.foodnetwork.com/recipes/emeril-lagasse/sangria-recipe4.html",
      img_url: "../assets/images/sangria.jpg",
      category_id: 5,
      user_id: 1
    }
  ];
});