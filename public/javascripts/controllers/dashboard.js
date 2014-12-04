app.controller("DashboardController", ["$scope", "$http", "$routeParams", "$location", "ngDialog", function($scope, $http, $routeParams, $location, ngDialog) {
  var uId;
  $http.get('/current_user').success(function(data) {
     uId = data["uid"];
     localStorage.setItem("fbUserId", uId)
     if (uId > 0){
       getUserRecipes(uId)
     } else {
       window.location = "/login"
     }
  })

    function getUserRecipes(uId) {

      $http.get('/users/' + uId + '/recipes').success(function(data) {
      $scope.recipes = data;
      });
    }

    $scope.logout = function(){
      $http.get('/logout').success(function(data) {
          localStorage.removeItem("fbUserId");
          window.location = "/login"
      })
    }

  $scope.addPinDialog = function(){
    ngDialog.open({
      template: 'templates/add_pin.html',
      scope: $scope
    });
  }

  $scope.clickToOpen = function (recipe) {
      $scope.recipe = recipe;
      console.log(recipe.tag_string);
     // var recipeTags = recipe.tag_string.split(", ");
     $scope.recipeTags = recipe.tag_string;
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
      $(".edit_form_click").removeClass("edit_form_cancel");
      $(".edit_form_click").addClass("edit_form");
    };

    $scope.cancelEdit = function(){
      $(".edit_form_click").removeClass("edit_form");
      $(".edit_form_click").addClass("edit_form_cancel");
    }

    $scope.saveRecipe = function(recipeId){
      var title = $(".recipe_name_input").val();
      var newTags = $(".tag_input").val();
      console.log(newTags);
      $(".recipeTitle").replaceWith("<h2 class=\"recipeTitle\">"+ title +"</h2>");
      //closes slide-up form
      $(".edit_form_click").removeClass("edit_form");
      $(".edit_form_click").addClass("edit_form_cancel");
      var newCategoryId = $scope.myForm.options[$('select').val()]["category_id"]
      console.log({title: title, category_id: newCategoryId, tag_string: newTags})
      $http.put('/users/' + uId + '/recipes/' + recipeId, {
        title: title,
        tags: newTags,
        category_id: newCategoryId}).success(function(data) {
        console.log('success');
      });
    }

    $scope.deleteRecipe = function(recipeId){
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
      console.log(uId);
      console.log(recipeId)
      $http.delete('/users/' + uId + '/recipes/' + recipeId).success(function(data) {
        console.log('success');
      });
    };
    $scope.addRecipe = function() {
      var new_recipe = {title: this.title, source_url: this.source_url, img_url: this.img_url, tags:this.tags, category:{name: this.category_name}}
      // $scope.recipes.unshift(new_recipe);
      $http.post('users/' + uId + '/recipes.json', {
        recipe: {title: this.title, source_url: this.source_url, img_url: this.img_url},
        category: this.category_name,
        tags: this.tags
      }).success(function(data) {
        $scope.recipes.unshift(data);
        console.log(data)
      });
      ngDialog.close();
    };

}
]);


