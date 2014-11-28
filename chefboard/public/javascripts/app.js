(function() {
  var app = angular.module('chefBoard', []);

  app.controller('BoardController', function(){
    this.recipe = test_recipe;
  });

})

var test_recipe= {
  title: "Chocolate Chip Cookies",
  source_url: "http://www.nytimes.com/2008/07/09/dining/091crex.html?_r=0",
  img_url: "../app/assets/images/chocolate-chip-cookie.jpg",
  category_id: 1,
  user_id: 1
}


t.string :title
      t.string :source_url
      t.string :img_url
      t.string :body
      t.integer :category_id
      t.integer :user_id

}
