angular.module('Chefboard', []);

angular.module('Chefboard').controller('BoardController', function ($scope, $http) {
  $http.get('/users/1/recipes').success(function(data) {
    $scope.recipes = data;
  });
//MEG SUN NIGHT
  // $scope.submittedLogin = false;
  // $scope.submittedSignup = false;

  // $scope.login = function() {
  //   $scope.submittedLogin = true;
  //   $http.post('/sessions', {
  //     facebook_id:
  //   })

  // }
// END MEG SUN NIGHT
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

// LOGOUT BUTTON FUNCTIONALITY

$('.logout-button').click(function(){
  FB.logout();
  renderLogin();
  $('body').addClass('body-background-image')
})

// var token = function() {
//   return {
//     facebook_id: localStorage.getItem("facebook_id"),
//     token: localStorage.getItem("token")
//   };
// };
// var loggedIn = function() {
//   return localStorage.getItem('facebook_id') === null ? false : true;
// };


// $('#status').on('click', '.logout-button', function() {
//   alert('worked')
// })

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


