var app = angular.module('Chefboard', ["ui.bootstrap", "ngDialog"]);

angular.module('Chefboard').controller('BoardController', function ($scope, $http, ngDialog) {
  $http.get('/users/1/recipes').success(function(data) {
    $scope.recipes = data;
  });

   $scope.clickToOpen = function (recipeImgUrl, recipeTitle, recipeSourceUrl, recipeCategory, recipeTagString, recipeId) {
    var recipeTags = recipeTagString.split(", ");
    $scope.recipeTags = recipeTags;
    console.log(recipeTagString);
    console.log("recipeCategory is: ");
    console.log(recipeCategory);
    $scope.myForm = {};
    $scope.recipeCategory = recipeCategory;
    $scope.recipeTitle = recipeTitle;
    $scope.recipeId = recipeId;
    $scope.myForm.options = [
      { category_id : 1, name: "Appetizers" }
      ,{ category_id : 2, name: "Beverages" }
      ,{ category_id : 3, name: "Breakfast" }
      ,{ category_id : 4, name: "Desserts" }
      ,{ category_id : 5, name: "Entrees" }
      ,{ category_id : 6, name: "Salads" }
      ,{ category_id : 7, name: "Sides" }
     ];

    ngDialog.open({
       template: '<div ng-hide="recipeDeleted" class="lightbox">' +
                    '<div>' +
                      '<table>' +
                          '<tr>' +
                            '<td>' +
                              '<div class="custom_captioning">' +
                                '<img class="lb-image" src=' + recipeImgUrl + '>' +
                                '<div class="caption">' +
                                  '<div class="blur">' +
                                  '</div>' +
                                  '<div class="caption-text">' +
                                    '<form>' +
//                                        '<input type="text" name="title" value="' + recipeTitle + '">' +
                                        '<select ng-init="recipe.category_id = recipeCategory" ng-model="recipe.category_id" ng-options="recipe.category_id as recipe.name for recipe in myForm.options"' + 
//                                        '<select ng-init="recipe.category_id = recipeCategory; {{recipe.category_id = recipeCategory}}" ng-model="recipe.category_id" ng-options="recipe.category_id as recipe.name for recipe in myForm.options"' + 
                                           'class="categories thick-txt-bx">' +
//                                          '<option selected="selected">' + 'myForm.options[recipeCategory]' + '</option>' +
                                          // '<option value="" disabled selected>' + recipeCategory +'</option>' +
//                                          '<option ng-repeat="category in categories" value={{category}}>{{category}}</option>' +
//                                          '<option value="1">Appetizers</option>' +
//                                          '<option value="2">Beverages</option>' +
//                                          '<option value="3">Breakfast</option>' +
//                                          '<option value="4">Entrees</option>' +
//                                          '<option value="5">Salads</option>' +
//                                          '<option value="6">Sides</option>' +
                                        '</select>' +
                                        '<form>' +
//                                       '<input type="text" name="tag_string" value="' + recipeTagString +  '">' +
                                        '<div class="form-group" ng-repeat="tag in recipeTags">' +
                                          '<input type="text" value="{{tag}}"/>' +
                                        '</div>' +
                                        '</form>' +
                                        '<input type="submit" value="Save">' +
                                        '<button ng-click="deleteRecipe($index)" value="Delete">Delete</button>' +
                                        '</form>' +
                                    '</form>' +
                                  '</div>' +
                                '</div>' +
                              '</div>' +
                            '</td>' +
                          '</tr>' +
                          '<tr>' +
                            '<td>' +
                              '<a href=' + recipeSourceUrl + ' target="_blank"><h2>' + recipeTitle + '</h2></a>' +
                              '<button ng-click="showEdit=true" ng-hide="showEdit">Edit</button>' +
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

  $scope.pressEsc = function pressEsc() {
      console.log("In pressEsc");
      $('body').trigger({
          type: 'keydown',
          which: 27 // Escape key
      });
  };

  $scope.deleteRecipe = function(index){
    console.log("in delete recipe");
    console.log("recipe id is: ");
    console.log($scope.recipeId);
    console.log("index is:  ");
    console.log(index);
    console.log("$scope.recipes is: ");
    console.log($scope.recipes);
    console.log("$scope.recipeTitle is: ");
    console.log($scope.recipeTitle);
    // find recipe to delete by title
    for(var i = 0; i < $scope.recipes.length; i++)
    {
      var recipeIndexToDelete = -1;
      if ($scope.recipes[i].title === $scope.recipeTitle)
      {
        recipeIndexToDelete = i;
        console.log("index to delete is: ");
        console.log(recipeIndexToDelete);
        $scope.recipes.splice(recipeIndexToDelete, 1);
      }
      
    }
    $scope.closeThisDialog();
    var url = '/users/1/recipes/' + $scope.recipeId;
    console.log(url);
    // $http['delete'](url).success(function(data){
    //   console.log("success");
    //   console.log(data);
    // })
    // .error(function(data){
    //   console.log("fail");
    //   console.log(data);
    // })
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
