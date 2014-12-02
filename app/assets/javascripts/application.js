var app = angular.module('Chefboard', ["ui.bootstrap", "ngDialog"]);

angular.module('Chefboard').controller('BoardController', function ($scope, $http, ngDialog) {
  $http.get('/users/1/recipes').success(function(data) {
    $scope.recipes = data;
  });

   $scope.clickToOpen = function (recipeImgUrl, recipeTitle, recipeSourceUrl, recipeCategory, recipeTagString, recipeId) {
    var recipeTags = recipeTagString.split(", ");
    $scope.recipeTags = recipeTags;
    console.log(recipeTagString);
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
       template: '<div class="lightbox">' +
                    '<div>' +
                      '<table>' +
                          '<tr>' +
                            '<td>' +
                              '<div class="custom_editing">' +
                                '<div class="lightbox_recipe_bg" style="background-image: url('+recipeImgUrl+')"></div>' +
                                // '<img class="lb-image" src=' + recipeImgUrl + '>' +
                                '<div class="edit_form_click">' +
                                  '<div class="blur">' +
                                  '</div>' +
                                  '<div class="edit_form-text">' +
                                    '<form class="recipe_edit_form">' +
                                        '<label>Recipe Name</label>' +
                                        '<input type="text" name="title" value="' + recipeTitle + '">' +
                                        '<label>Category</label>' +
                                        '<select ng-init="recipe.category_id = recipeCategory" ng-model="recipe.category_id" ng-options="recipe.category_id as recipe.name for recipe in myForm.options"' +
                                          'class="categories thick-txt-bx">' +
                                        '</select><br>' +
                                        '<label>Tags</label>' +
                                        '<input ng-repeat="tag in recipeTags" type="text" name="tag_string" value="{{tag}}">' +
                                    '</form>' +
                                    '<button>Save</button>' +
                                    '<button ng-click="deleteRecipe($index)" value="Delete">Delete</button>' +
                                    '<button ng-click="cancelEdit()">Cancel</button>' +
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
  };

  $scope.editPin = function(){
    $(".edit_form_click").removeClass("edit_form_cancel");
    $(".edit_form_click").addClass("edit_form");
  };

  $scope.cancelEdit = function(){
    $(".edit_form_click").removeClass("edit_form");
    $(".edit_form_click").addClass("edit_form_cancel");
  }

  $scope.deleteRecipe = function(index){
    // find recipe to delete by title
    for(var i = 0; i < $scope.recipes.length; i++)
    {
      var recipeIndexToDelete = -1;
      if ($scope.recipes[i].title === $scope.recipeTitle)
      {
        recipeIndexToDelete = i;
        $scope.recipes.splice(recipeIndexToDelete, 1);
      }

    }

    $scope.closeThisDialog();
    // var url = '/users/1/recipes/' + $scope.recipeId;
    // console.log(url);
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
