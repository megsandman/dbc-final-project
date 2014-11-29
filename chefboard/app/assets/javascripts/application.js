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
      img_url: "assets/chocolate-chip-cookie.jpg",
      category_id: 1,
      user_id: 1
    },
    {
      title: "Pizza Dough",
      source_url: "http://www.foodnetwork.com/recipes/bobby-flay/pizza-dough-recipe.html",
      img_url: "assets/pizza-dough.jpeg",
      category_id: 2,
      user_id: 1
    },
    {
      title: "Kale and Citrus Salad",
      source_url: "http://www.saveur.com/article/Recipes/Winter-Kale-and-Citrus-Salad",
      img_url: "assets/kale-citrus-salad.jpg",
      category_id: 3,
      user_id: 1
    },
    {
      title: "Cranberry pie with thick pecan crumble",
      source_url: "http://smittenkitchen.com/blog/2014/11/cranberry-pie-with-thick-pecan-crumble/",
      img_url: "assets/cranberry-pie-with-thick-pecan-crumble.jpg",
      category_id: 4,
      user_id: 1
    },
    {
      title: "Sangria",
      source_url: "http://www.foodnetwork.com/recipes/emeril-lagasse/sangria-recipe4.html",
      img_url: "assets/sangria.jpg",
      category_id: 5,
      user_id: 1
    },
    {
      title: "Crispy Sweet Potato Roast",
      source_url: "http://smittenkitchen.com/blog/2014/11/crispy-sweet-potato-roast/",
      img_url: "assets/crispy-sweet-potato-roast.jpg",
      category_id: 1,
      user_id: 1
    },
    {
      title: "Butternut Squash, Ricotta, and Sage Crostini",
      source_url: "http://www.epicurious.com/recipes/food/views/Butternut-Squash-Ricotta-and-Sage-Crostini-367711",
      img_url: "assets/sage-crostini.jpg",
      category_id: 1,
      user_id: 1
    },
    {
      title: "Chicken Marsala",
      img_url: "assets/chicken-marsala.jpg",
      source_url: "http://www.epicurious.com/recipes/food/views/Chicken-Marsala-232152",
      category_id: 2,
      user_id: 1
    }
  ];

  $scope.addRecipe = function() {
    $scope.recipes.unshift({title: $scope.recipeTitle, source_url: $scope.recipeLink, img_url: $scope.imageLink, category_id: $scope.category, tags: $scope.recipeTags})
    alert($scope.recipeTags)
    $scope.recipeTitle = "";
    $scope.recipeLink = "";
    $scope.imageLink = "";
    $scope.recipeTags = "";
    $scope.category = {};

  };


});