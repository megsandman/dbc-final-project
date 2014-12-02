app.controller("DashboardController", ["$scope", "$http", "$routeParams", "$location", "ngDialog", function($scope, $http, $routeParams, $location, ngDialog) {

  if(!loggedIn()) {
    $location.path('/');
  } else {
    console.log(localStorage.getItem('fbUserId'))
    var fbID = localStorage.getItem('fbUserId')
    $http.get('/users/' + fbID + '/recipes').success(function(data) {
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

  $scope.clickToOpen = function (recipeImgUrl, recipeTitle, recipeSourceUrl, recipeCategory, recipeTagString, recipeId) {
     var recipeTags = recipeTagString.split(", ");
     $scope.recipeTags = recipeTags;
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
     console.log(recipeTagString);
      ngDialog.open({
         template: '<div class="lightbox">' +
                      '<div>' +
                        '<table>' +
                            '<tr>' +
                              '<td>' +
                                '<div class="custom_editing">' +
                                  '<div class="lightbox_recipe_bg" style="background-image: url('+recipeImgUrl+')"></div>' +
                                   '<div class= "edit_form_click">' +
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
                                          '<input name="tag_string" value="' + recipeTagString +'">' +
                                          // '<input ng-repeat="tag in recipeTags" type="text" name="tag_string" value="{{tag}}">' +
                                          '</form>' +
                                         '<button>Save</button>' +
                                         '<button ng-click="deleteRecipe($index)" value="Delete">Delete</button>' +
                                        '<button ng-click="cancelEdit()">Cancel</button>' +
                                      // '</form>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</td>' +
                            '</tr>' +
                            '<tr>' +
                              '<td>' +
                                '<a  class="lightbox_link_label" href=' + recipeSourceUrl + ' target="_blank"><h2>' + recipeTitle + '</h2></a>' +
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
      // var url = '/users/1/recipes/' +  $scope.recipeId;
      // console.log(url);
    };

    $scope.addRecipe = function() {
      if ( loggedIn() ){
        $http.post('users/1/recipes.json', {title: $scope.recipeTitle, source_url: $scope.recipeLink, img_url: $scope.imageLink, category: $scope.category, tags: $scope.recipeTags, tag_string: $scope.recipeTags}).success(function(data) {
          $scope.recipes.unshift(data);
          // console.log(data)
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
