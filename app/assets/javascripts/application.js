var app = angular.module('chefboard', ["ngRoute", "ui.bootstrap", "ngDialog"]);

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    if (response.status === 'connected') {
      renderIndex();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      console.log('not authorized');
      renderLogin();
    } else {
      console.log("else");
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      renderLogin();
    }
  }

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1520208361571689',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

function renderIndex() {
    FB.api('/me', function(response) {
      console.log(response);
    });

    $('#index-template').removeClass('hidden-div')
    $('#login-template').addClass('hidden-div')
    $('body').removeClass('body-background-image')
  };

  function renderLogin() {
    $('#login-template').removeClass('hidden-div')
    $('#index-template').addClass('hidden-div')
  };









///////////


// angular.module('Chefboard').controller('BoardController', function ($scope, $http, ngDialog) {
//   $http.get('/users/1/recipes').success(function(data) {
//     $scope.recipes = data;
//   });

//    $scope.clickToOpen = function (recipeImgUrl, recipeTitle, recipeSourceUrl, recipeCategory, recipeTagString) {
//     var recipeTags = recipeTagString.split(", ");
//     $scope.recipeTags = recipeTags;
//     console.log(recipeTagString);

//     ngDialog.open({
//        template: '<div class="lightbox">' +
//                     '<div>' +
//                       '<table>' +
//                           '<tr>' +
//                             '<td>' +
//                               '<div class="custom_editing">' +
//                                 '<img class="lb-image" src=' + recipeImgUrl + '>' +
//                                 '<div class="edit_form_click">' +
//                                   '<div class="blur">' +
//                                   '</div>' +
//                                   '<div class="edit_form-text">' +
//                                     '<form>' +
//                                         '<input type="text" name="title" value="' + recipeTitle + '">' +
//                                         '<select class="categories thick-txt-bx">' +
//                                           '<option selected="selected">' + recipeCategory + '</option>' +
//                                           // '<option value="" disabled selected>' + recipeCategory +'</option>' +
//                                           '<option value="1">Appetizers</option>' +
//                                           '<option value="2">Beverages</option>' +
//                                           '<option value="3">Breakfast</option>' +
//                                           '<option value="4">Entrees</option>' +
//                                           '<option value="5">Salads</option>' +
//                                           '<option value="6">Sides</option>' +
//                                         '</select>' +
//                                         '<input type="text" name="tag_string" value="' + recipeTagString +  '">' +
//                                         '<div class="form-group" ng-repeat="tag in recipeTags">' +
//                                           '<p>"{{tag}}"</p>' +
//                                         '</div>' +
//                                     '</form>' +
//                                     '<button ng-click="cancelEdit()">Cancel</button>' +
//                                   '</div>' +
//                                 '</div>' +
//                               '</div>' +
//                             '</td>' +
//                           '</tr>' +
//                           '<tr>' +
//                             '<td>' +
//                               '<a href=' + recipeSourceUrl + ' target="_blank"><h2>' + recipeTitle + '</h2></a>' +
//                               '<button ng-click="editPin(); showEdit=true">Edit</button>' +
//                               '</td>' +
//                             '</tr>' +
//                          '</table>' +
//                       '</div>' +
//                   '</div>',
//       plain: true,
//       scope: $scope
//     });
//   };

//   $scope.editPin = function(){
//     $(".edit_form_click").removeClass("edit_form_cancel");
//     $(".edit_form_click").addClass("edit_form");
//   };

//   $scope.cancelEdit = function(){
//     $(".edit_form_click").removeClass("edit_form");
//     $(".edit_form_click").addClass("edit_form_cancel");
//   }

//   $scope.addRecipe = function() {
//     $http.post('users/1/recipes.json', {title: $scope.recipeTitle, source_url: $scope.recipeLink, img_url: $scope.imageLink, category: $scope.category, tags: $scope.recipeTags, tag_string: $scope.recipeTags}).success(function(data) {
//       $scope.recipes.unshift(data);
//       console.log(data)
//       $scope.recipeTitle = "";
//       $scope.recipeLink = "";
//       $scope.imageLink = "";
//       $scope.recipeTags = "";
//       $scope.category = {};
//     });
//   };

// });


