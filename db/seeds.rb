CATEGORIES = ["Appetizers", "Beverages", "Breakfast", "Desserts", "Entrees", "Salads", "Sides"]

CATEGORIES.each do |category|
  Category.create(name: category)
end

# Recipe.create(
#       title: "Chocolate Chip Cookies",
#       source_url: "http://www.nytimes.com/2008/07/09/dining/091crex.html?_r=0",
#       img_url: "assets/chocolate-chip-cookie.jpg",
#       category_id: 1,
#       user_id: 1
#   )
# Recipe.create(
#       title: "Pizza Dough",
#       source_url: "http://www.foodnetwork.com/recipes/bobby-flay/pizza-dough-recipe.html",
#       img_url: "assets/pizza-dough.jpeg",
#       category_id: 2,
#       user_id: 1
#   )
# Recipe.create(
#       title: "Kale and Citrus Salad",
#       source_url: "http://www.saveur.com/article/Recipes/Winter-Kale-and-Citrus-Salad",
#       img_url: "assets/kale-citrus-salad.jpg",
#       category_id: 3,
#       user_id: 1
#   )
# Recipe.create(
#       title: "Cranberry pie with thick pecan crumble",
#       source_url: "http://smittenkitchen.com/blog/2014/11/cranberry-pie-with-thick-pecan-crumble/",
#       img_url: "assets/cranberry-pie-with-thick-pecan-crumble.jpg",
#       category_id: 4,
#       user_id: 1
#   )
# Recipe.create(
#       title: "Sangria",
#       source_url: "http://www.foodnetwork.com/recipes/emeril-lagasse/sangria-recipe4.html",
#       img_url: "assets/sangria.jpg",
#       category_id: 5,
#       user_id: 1
#   )
# Recipe.create(
#       title: "Crispy Sweet Potato Roast",
#       source_url: "http://smittenkitchen.com/blog/2014/11/crispy-sweet-potato-roast/",
#       img_url: "assets/crispy-sweet-potato-roast.jpg",
#       category_id: 1,
#       user_id: 1
#   )
#   Recipe.create(
#       title: "Butternut Squash, Ricotta, and Sage Crostini",
#       source_url: "http://www.epicurious.com/recipes/food/views/Butternut-Squash-Ricotta-and-Sage-Crostini-367711",
#       img_url: "assets/sage-crostini.jpg",
#       category_id: 1,
#       user_id: 1
#     )
#   Recipe.create(
#       title: "Chicken Marsala",
#       img_url: "assets/chicken-marsala.jpg",
#       source_url: "http://www.epicurious.com/recipes/food/views/Chicken-Marsala-232152",
#       category_id: 2,
#       user_id: 1
#     )

# User.create(username: "meg", email: "meg@meg.com", password: "password")

