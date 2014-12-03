app.controller("DashboardController", ["$scope", "$http", "$routeParams", "$location", "ngDialog", function($scope, $http, $routeParams, $location, ngDialog) {
  var uId;
  $http.get('/current_user').success(function(data) {
     uId = data["uid"];
     // alert(uId);
     getUserRecipes(uId)
  })
  // if(!loggedIn()) {
  //   $location.path('/');
  // } else {
    // console.log(localStorage.getItem('fbUserId'))
    // var fbID = localStorage.getItem('fbUserId')
    function getUserRecipes(uId) {
      console.log(uId)
      $http.get('/users/' + uId + '/recipes').success(function(data) {
      $scope.recipes = data;
      });
    }

    $scope.logout = function(){
      $http.get('/logout').success(function(data) {
          // alert('in logout!')
          // localStorage.removeItem("fbUserId");
          $location.path('/');

      })
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
                                          '<input class="recipe_name_input" type="text" name="title" value="' + recipeTitle + '">' +
                                          '<label>Category</label>' +
                                          '<select ng-init="recipe.category_id = recipeCategory" ng-model="recipe.category_id" ng-options="recipe.category_id as recipe.name for recipe in myForm.options"' +
                                          'class="categories thick-txt-bx">' +
                                          '</select><br>' +
                                          '<label>Tags</label>' +
                                          '<input class="tag_input" name="tag_string" value="' + recipeTagString +'">' +
                                          // '<input ng-repeat="tag in recipeTags" type="text" name="tag_string" value="{{tag}}">' +
                                          '</form>' +
                                         '<button ng-click="saveRecipe(' + recipeId + ')">Save</button>' +
                                         '<button ng-click="deleteRecipe(' + recipeId + ')" value="Delete">Delete</button>' +
                                        '<button ng-click="cancelEdit()">Cancel</button>' +
                                      // '</form>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</td>' +
                            '</tr>' +
                            '<tr>' +
                              '<td class="lightbox_caption">' +
                                '<div class="float_left">' +
                                  '<a  class="lightbox_link_label" href=' + recipeSourceUrl + ' target="_blank"><h2 class="recipeTitle">' + recipeTitle + '</h2></a>' +
                                '</div>' +
                                '<div class="float_right" >' +
                                  '<button class="edit_btn" ng-click="editPin(); showEdit=true">Edit</button>' +
                                '</div>' +
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

    $scope.saveRecipe = function(recipeId){
      if (loggedIn() ){
        // alert(recipeId)
        //updates view for dialog caption
        var title = $(".recipe_name_input").val();
        var newTags = $(".tag_input").val();

        $(".recipeTitle").replaceWith("<h2 class=\"recipeTitle\">"+ title +"</h2>");
        //closes slide-up form
        $(".edit_form_click").removeClass("edit_form");
        $(".edit_form_click").addClass("edit_form_cancel");
        var newCategoryId = $scope.myForm.options[$('select').val()]["category_id"]
        $http.put('/users/' + fbID + '/recipes/' + recipeId, {title: title, category_id: newCategoryId, tags: newTags, tag_string: newTags}).success(function(data) {
        console.log('success');
      });

      }
      else{
          $location.path('/');
      }
    }

    $scope.deleteRecipe = function(recipeId){
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
      ngDialog.close();

      $http.delete('/users/' + fbID + '/recipes/' + recipeId).success(function(data) {
        console.log('success');
      });

    };

    $scope.addRecipe = function() {
      if ( loggedIn() ){
        $http.post('users/' + fbID + '/recipes.json', {title: $scope.recipeTitle, source_url: $scope.recipeLink, img_url: $scope.imageLink, category: $scope.category, tags: $scope.recipeTags, tag_string: $scope.recipeTags}).success(function(data) {
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

  // }
}
]);


// LOGOUT BUTTON FUNCTIONALITY

// $('.logout-button').click(function(){
//   FB.logout();
//   renderLogin();
//   $('body').addClass('body-background-image')
// })
