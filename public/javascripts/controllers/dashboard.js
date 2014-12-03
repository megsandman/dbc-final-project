app.controller("DashboardController", ["$scope", "$http", "$routeParams", "$location", "ngDialog", function($scope, $http, $routeParams, $location, ngDialog) {

  if(!loggedIn()) {
    $location.path('/');
  } else {
    // console.log(localStorage.getItem('fbUserId'))
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

  $scope.addPinDialog = function(){
    ngDialog.open({
      template: 'templates/test_template.html',
      scope: $scope
    });
  }

  $scope.clickToOpen = function (recipe) {
      $scope.recipe = recipe;

     var recipeTags = recipe.tag_string.split(", ");
     $scope.recipeTags = recipeTags;
     $scope.myForm = {};
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
        template: 'templates/recipe_editor.html',
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

    $scope.saveRecipe = function(){
      if (loggedIn() ){
        //updates view for dialog caption
        var title = $(".recipe_name_input").val();
        $(".recipeTitle").replaceWith("<h2 class=\"recipeTitle\">"+ title +"</h2>");
        //closes slide-up form
        $(".edit_form_click").removeClass("edit_form");
        $(".edit_form_click").addClass("edit_form_cancel");
      }
      else{
          $location.path('/');
      }
    }

    $scope.deleteRecipe = function(index){
    // find recipe to delete by title
      for(var i = 0; i < $scope.recipes.length; i++)
      {
        var recipeIndexToDelete = -1;
        if ($scope.recipes[i].title === $scope.recipe.title)
        {
          recipeIndexToDelete = i;
          $scope.recipes.splice(recipeIndexToDelete, 1);
        }
      }
      ngDialog.close();
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
