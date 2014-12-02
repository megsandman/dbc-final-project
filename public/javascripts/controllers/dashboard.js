app.controller("DashboardController", ["$scope", "$http", "$routeParams", "$location", "ngDialog", function($scope, $http, $routeParams, $location, ngDialog) {

  if(!loggedIn()) {
    $location.path('/');
  } else {
    console.log(localStorage.getItem('fbUserId'))
    console.log('in else on /dashboard')
    $http.get('/users/1/recipes').success(function(data) {
      $scope.recipes = data;
    });

    $scope.logout = function(){
      fbID = localStorage.getItem("fbUserId");
      window.fbAsyncInit;
      FB.logout();
      // $http.delete('/sessions/' + fbID)
      localStorage.removeItem("fbUserId");
      $location.path('/');

    }

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
                                  '<div class="edit_form_click">' +
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
      if ( loggedIn() ){
        $(".edit_form_click").removeClass("edit_form_cancel");
        $(".edit_form_click").addClass("edit_form");
      } else {
        $location.path('/');
      }
    };

    $scope.cancelEdit = function(){
      if ( loggedIn() ){
        $(".edit_form_click").removeClass("edit_form");
        $(".edit_form_click").addClass("edit_form_cancel");
      } else {
        $location.path('/');
      }
    }

    $scope.addRecipe = function() {
      if ( loggedIn() ){
        $http.post('users/1/recipes.json', {title: $scope.recipeTitle, source_url: $scope.recipeLink, img_url: $scope.imageLink, category: $scope.category, tags: $scope.recipeTags, tag_string: $scope.recipeTags}).success(function(data) {
          $scope.recipes.unshift(data);
          console.log(data)
          $scope.recipeTitle = "";
          $scope.recipeLink = "";
          $scope.imageLink = "";
          $scope.recipeTags = "";
          $scope.category = {};
        });
      } else {
        $location.path('/');
      }
    };

  }
}]);


// LOGOUT BUTTON FUNCTIONALITY

// $('.logout-button').click(function(){
//   FB.logout();
//   renderLogin();
//   $('body').addClass('body-background-image')
// })