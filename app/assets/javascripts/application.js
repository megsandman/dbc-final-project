var app = angular.module('Chefboard', ["ui.bootstrap", "ngDialog"]);

angular.module('Chefboard').controller('BoardController', function ($scope, $http, ngDialog) {
  $http.get('/users/1/recipes').success(function(data) {
    $scope.recipes = data;
  });


  $scope.clickToOpen = function (recipeImgUrl, recipeTitle, recipeId) {
    ngDialog.open({
      // template: '<div class="lightbox">' +
      //               '<a href="">' +
      //                 '<img class="lb-image" src=' + recipeImgUrl + '>' +
      //               '</a>' + recipeTitle +
      //           '</div>',
       template: '<div class="lightbox">' +
                    '<img class="lb-image" src=' + recipeImgUrl + '>' +
                    '<a href=' + recipeImgUrl + '><p>' + recipeTitle + '</p></a>' +
                '</div>',
     // template: "<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>",
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


