var app = angular.module('Chefboard', ["ui.bootstrap", "ngDialog"]);

angular.module('Chefboard').controller('BoardController', function ($scope, $http, ngDialog) {
  $http.get('/users/1/recipes').success(function(data) {
    $scope.recipes = data;
  });

   $scope.clickToOpen = function (recipeImgUrl, recipeTitle, recipeSourceUrl, recipeCategory, recipeTagString) {
    var recipeTags = recipeTagString.split(", ");
    $scope.recipeTags = recipeTags;
    console.log(recipeTagString);

    ngDialog.open({
       template: '<div class="lightbox">' +
                    '<div>' +
                      '<table>' +
                          '<tr>' +
                            '<td>' +
                              '<div class="custom_editing">' +
                                '<img class="lb-image" src=' + recipeImgUrl + '>' +
                                '<div class="edit_form">' +
                                  '<div class="blur">' +
                                  '</div>' +
                                  '<div class="edit_form-text">' +
                                    '<form>' +
                                        '<input type="text" name="title" value="' + recipeTitle + '">' +
                                        '<select class="categories thick-txt-bx">' +
                                          '<option selected="selected">' + recipeCategory + '</option>' +
                                          // '<option value="" disabled selected>' + recipeCategory +'</option>' +
                                          '<option value="1">Appetizers</option>' +
                                          '<option value="2">Beverages</option>' +
                                          '<option value="3">Breakfast</option>' +
                                          '<option value="4">Entrees</option>' +
                                          '<option value="5">Salads</option>' +
                                          '<option value="6">Sides</option>' +
                                        '</select>' +
                                        '<input type="text" name="tag_string" value="' + recipeTagString +  '">' +
                                        '<div class="form-group" ng-repeat="tag in recipeTags">' +
                                          '<p>"{{tag}}"</p>' +
                                        '</div>' +
                                    '</form>' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                            '</td>' +
                          '</tr>' +
                          '<tr>' +
                            '<td>' +
                              '<a href=' + recipeSourceUrl + ' target="_blank"><h2>' + recipeTitle + '</h2></a>' +
                              '<button ng-click="editPin(); showEdit=true">Edit</button>' +
                              '</td>' +
                            '</tr>' +
                         '</table>' +
                      '</div>' +
                  '</div>',
      plain: true,
      scope: $scope
    });

    //  $("body").on('load', '.lightbox', function(){
    //   alert("lightbox loaded");
    // });

    console.log(recipeImgUrl, recipeTitle);
  };

  $scope.editPin = function(){
    alert("editPin function called. Make it apply the hover css class stuff on click");
  };



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

// test

// $("#edit").on('click', function(){
//   alert("hi");
// });
