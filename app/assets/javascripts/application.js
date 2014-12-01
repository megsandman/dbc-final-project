var app = angular.module('Chefboard', ["ui.bootstrap", "ngDialog"]);

angular.module('Chefboard').controller('BoardController', function ($scope, $http, ngDialog) {
  $http.get('/users/1/recipes').success(function(data) {
    $scope.recipes = data;
  });


  $scope.clickToOpen = function (recipeImgUrl, recipeTitle, recipeSourceUrl) {
    ngDialog.open({
       template: '<div class="lightbox">' +
                    '<img class="lb-image" src=' + recipeImgUrl + '>' +
                    '<a href=' + recipeSourceUrl + ' target="_blank"><p>' + recipeTitle + '</p></a>' +
                    '<button ng-click="showEdit=true">Edit</button>' +
                    '<div ng-show="showEdit">' +
                    '<form>' +
                        '<input type="text" name="title" value="' + recipeTitle + '">' +
                    '</form>' +
                    '</div>' +
                '</div>',
      plain: true
    });
    console.log(recipeImgUrl, recipeTitle);
  }



  $scope.addRecipe = function() {
    $http.post('users/1/recipes.json', {title: $scope.recipeTitle, source_url: $scope.recipeLink, img_url: $scope.imageLink, category: $scope.category, tags: $scope.recipeTags, tag_string: $scope.recipeTags}).success(function(data) {
      $scope.recipes.unshift(data);
      console.log(data)
      $scope.recipeTitle = "";
      $scope.recipeLink = "";
      $scope.imageLink = "";
      $scope.recipeTags = "";
      $scope.category = {};
    });
  };

});

// $(document).ready(function() {
//   $('.all_tiles').on("click", "#lightbox", function() {
//     alert('hello');
//     window.location="http://www.google.com";
//     console.log('hello');

//   });
// var $container = $('.recipe-container');
// var msnry;
// $container.imagesLoaded( function() {
//   $container.masonry(
//     columnWidth: 200,
//     itemSelector: '.recipe-image'
//     );
// });
// });
// $(document).ready(function() {


//   var $container = $('.all_tiles').masonry();
// // layout Masonry again after all images have loaded
//     $container.imagesLoaded( function() {
//     $container.masonry({
//       columnWidth: 200,
//       itemSelector: '.item'
//     });
//   });

// });


