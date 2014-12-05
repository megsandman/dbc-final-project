# user = User.create(name: "Meg Sandman", provider: "Facebook", uid: "10100684954327834")
# user = User.new()

CATEGORIES = ["Appetizers", "Beverages", "Breakfast", "Desserts", "Entrees", "Salads", "Sides"]

CATEGORIES.each do |category|
  Category.create(name: category)
end

##### BEGIN SEEDS THAT COME WITH NEW USER ######


# Recipe.create(
#       title: "Chocolate Chip Cookies",
#       source_url: "http://www.nytimes.com/2008/07/09/dining/091crex.html?_r=0",
#       img_url: "http://graphics8.nytimes.com/images/2013/06/19/dining/19PASTRY1_SPAN/19PASTRY1_SPAN-articleLarge-v2.jpg",
#       category_id: 4,
#       tag_string: "cookie, chocolate",
#       # user_id: 1
#   )
# Recipe.create(
#       title: "Cranberry Newton Bars",
#       source_url: "http://food52.com/recipes/31923-cranberry-newton-bars",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48297/full/cranberry_newton_bars_1.jpg?1415581465",
#       tag_string: "cranberry, bars",
#       category_id: 4,
#       # user_id: 1
#   )
# Recipe.create(
#       title: "Shaved Brussel Sprout Salad",
#       source_url: "http://www.sacramentostreet.com/2014/11/on-the-menu-shaved-brussel-sprout-salad/",
#       img_url: "http://www.sacramentostreet.com/wp-content/uploads/2014/11/Shaved-Brussel-Sprout-Salad_3.jpg",
#       tag_string: "healthy, salad, parmesan, brussel sprout, yum",
#       category_id: 6,
#       # user_id: 1
#   )
# Recipe.create(
#       title: "Cranberry pie with thick pecan crumble",
#       source_url: "http://smittenkitchen.com/blog/2014/11/cranberry-pie-with-thick-pecan-crumble/",
#       img_url: "http://smittenkitchen.com/wp-content/uploads/cranberry-pie-with-thick-pecan-crumble.jpg",
#       tag_string: "pie, yum, cranberry",
#       category_id: 4,
#       # user_id: 1
#   )
# Recipe.create(
#       title: "Mid-Winter Margarita",
#       source_url: "http://food52.com/blog/11824-the-mid-winter-margarita",
#       img_url: "https://farm8.staticflickr.com/7580/15694874477_c02de54479_b.jpg",
#       tag_string: "yum, party, margarita",
#       category_id: 2,
#       # user_id: 1
#   )
# Recipe.create(
#       title: "Crispy Sweet Potato Roast",
#       source_url: "http://smittenkitchen.com/blog/2014/11/crispy-sweet-potato-roast/",
#       img_url: "http://smittenkitchen.com/wp-content/uploads/crispy-sweet-potato-roast.jpg",
#       tag_string: "yum, thanksgiving",
#       category_id: 7,
#       # user_id: 1
#   )
# Recipe.create(
#       title: "Roasted Grape and Butternut Squash Salad with Kale and Parmesan",
#       source_url: "http://food52.com/recipes/32152-roasted-grape-and-butternut-squash-salad-with-kale-and-parmesan",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48732/full/roasted_squash_and_grape_salad05.jpg?1416365978",
#       tag_string: "health, squash, parmesan, yum",
#       category_id: 6,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Pumpkin Cheescake Squares",
#       source_url: "http://www.sacramentostreet.com/2014/11/on-the-menu-pumpkin-cheesecake-squares-with-toasted-marshmallow-frosting/",
#       img_url: "http://www.sacramentostreet.com/wp-content/uploads/2014/11/Pumpkin_Cheesecake_3.jpg",
#       tag_string: "bars, pumpkin",
#       category_id: 4,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Homemade Cheez-Its",
#       source_url: "http://food52.com/recipes/31899-homemade-cheez-its",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48245/full/beauty1.jpg?1415373989",
#       tag_string: "snacks, cheese",
#       category_id: 1,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Pomegranate Flank Steak",
#       source_url: "http://food52.com/recipes/31870-pomegranate-flank-steak",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48193/full/pomegranateflanksteak1.jpg?1415165494",
#       tag_string: "steak, pomegranate",
#       category_id: 5,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Buttermilk Biscuits",
#       source_url: "http://food52.com/recipes/31811-buttermilk-biscuits",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48228/full/15720424702_9f34c06f4a_k.jpg?1415300915",
#       tag_string: "biscuits, yum",
#       category_id: 7,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Cookies and Cream Bars",
#       source_url: "http://food52.com/recipes/31749-cookies-and-cream-bars",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47954/full/2014-1028_how-to-make-cookies-and-cream-bars-127.jpg?1414688880",
#       tag_string: "bars",
#       category_id: 4,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Sporting Life",
#       source_url: "http://food52.com/recipes/31751-sporting-life",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47959/full/2014-1028_sporting-life-cocktail-012.jpg?1414694398",
#       tag_string: "orange",
#       category_id: 2,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Pumpkin Ricotta Pancake",
#       source_url: "http://iamafoodblog.com/pumpkin-ricotta-pancake-recipe/",
#       img_url: "http://o.iamafoodblog.com/iamablog/wp-content/uploads/2014/10/pumpkin-ricotta-pancakes-3.jpg",
#       tag_string: "pancakes, pumpkin, ricotta",
#       category_id: 3,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Pumpkin Spice Latte Syrup",
#       source_url: "http://iamafoodblog.com/pumpkin-spice-latte-syrup-recipe/",
#       img_url: "http://x.iamafoodblog.com/iamablog/wp-content/uploads/2014/09/psl-1.jpg",
#       tag_string: "syrup, pumpkin",
#       category_id: 2,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Crispy Stuffing Cakes with Quail Eggs",
#       source_url: "http://iamafoodblog.com/sunday-brunch-crispy-stuffing-cakes-with-quail-eggs-recipe/",
#       img_url: "http://i.iamafoodblog.com/iamablog/wp-content/uploads/2014/11/stuffing-cakes-6.jpg",
#       tag_string: "stuffing, eggs, thanksgiving",
#       category_id: 3,
#       # user_id: 1
#     )
# Recipe.create(
#       title: "Raspberry Crumble Pancakes",
#       source_url: "http://iamafoodblog.com/sunday-brunch-raspberry-crumble-pancake-recipe/",
#       img_url: "http://i.iamafoodblog.com/iamablog/wp-content/uploads/2014/08/raspberry-crumble-pancakes-5.jpg",
#       tag_string: "raspberry, pancakes",
#       category_id: 3,
#       # user_id: 1
#     )


##### END SEEDS THAT COME WITH NEW USER ######
# Recipe.create(
#       title: "Potatoes àla Lyonnaise",
#       source_url: "http://food52.com/recipes/31663-potatoes-ala-lyonnaise",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47844/full/POTATOES_%C3%80LA_LYONNAISE.jpg?1414411562",
#       tag_string: "potatoes",
#       category_id: 7,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Pasta with Spicy Chicken Meatballs",
#       source_url: "http://food52.com/blog/11839-for-better-weeknight-pasta-add-spicy-chicken-meatballs-broccoli",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48982/full/chicken-sausage-meatball-broccoli-pasta-bowl_food52_mark_weinberg_14-11-21_0305.jpg?1417215672",
#       tag_string: "pasta, chicken, meatballs, broccoli",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Creamy Mushroom Pasta",
#       source_url: "http://food52.com/blog/11678-creamy-mushroom-pasta#jRNTKR:P4i",
#       img_url: "https://farm8.staticflickr.com/7499/15100483023_68540fbee4_b.jpg",
#       tag_string: "pasta, mushroom",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Chicken Ceasar Salad",
#       source_url: "http://food52.com/recipes/4510-chicken-caesar-salad-with-anchovy-caesar-vinaigrette-and-garlic-parmesan-croutons",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/46518/full/2014-0819_chicken-caesar-salad-006.jpg?1410182787",
#       tag_string: "chicken",
#       category_id: 6,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Spicy Orange-Ginger Chicken",
#       source_url: "http://food52.com/blog/11638-skip-takeout-make-spicy-orange-ginger-chicken#jRNTKR:WN8",
#       img_url: "https://farm6.staticflickr.com/5606/15490425250_35c3837366_b.jpg",
#       tag_string: "chicken, chinese, orange, ginger",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Crispy Coconut Kale with Roasted Salmon",
#       source_url: "http://food52.com/recipes/26046-crispy-coconut-kale-with-roasted-salmon-and-coconut-rice",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/40091/full/2014-0211_crispy-coconut-kale-roasted-salmon-006.jpg?1403287764",
#       tag_string: "salmon, kale, rice",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Chicken Cacciatore",
#       source_url: "http://food52.com/blog/11418-one-pot-chicken-cacciatore#jRNTKR:N2G",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47119/full/Chicken-Cacciatore_0735_food52_mark_weinberg.jpg?1412197552",
#       tag_string: "chicken",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Brown Butter Blondies",
#       source_url: "http://food52.com/recipes/32350-brown-butter-blondies",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/49101/full/blondies6.jpg?1417628482",
#       tag_string: "blondie, bar",
#       category_id: 4,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Dark Molasses Gingerbread Cake",
#       source_url: "http://food52.com/recipes/32198-faith-durand-s-dark-molasses-gingerbread-cake",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48803/full/damp-dark-molasses-gingerbread-cooked-cream-cheese-frosting-cake_food52_mark_weinberg_14-11-21_0669.jpg?1416762756",
#       tag_string: "gingerbread, cake",
#       category_id: 4,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Roasted Acorn Squash with Maple and Red Pepper Flakes",
#       source_url: "http://food52.com/recipes/32064-roasted-acorn-squash-with-maple-and-red-pepper-flakes",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48617/full/squish.jpg?1416231291",
#       tag_string: "squash",
#       category_id: 7,
#       user_id: 1
#     )
# Recipe.create(
#       title: "Roasted Onion Salad with Arugula and Walnut Salsa
# ",
#       source_url: "http://food52.com/recipes/31997-roasted-onion-salad-with-arugula-and-walnut-salsa",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48430/full/roasted-red-onions-with-walnut-salad_food52_mark_weinberg_14-11-04_0214.jpg?1415744531",
#       tag_string: "healthy",
#       category_id: 6,
#       user_id: 1
#     )
# Recipe.create(
#       title: "Roasted Sausage, Tomatoes, and Peppers",
#       source_url: "http://food52.com/recipes/31903-roasted-sausage-tomatoes-and-peppers",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48267/full/F52_Roasted_Sausages.jpg?1415388995",
#       tag_string: "quick",
#       category_id: 5,
#       user_id: 1
#     )
# Recipe.create(
#       title: "Fall Wisconsin Old Fashioned
# ",
#       source_url: "http://food52.com/recipes/31599-fall-wisconsin-old-fashioned",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48200/full/old-fashioned_food52_mark_weinberg_14-11-04_0548.jpg?1415209257",
#       tag_string: "fall",
#       category_id: 2,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Bacon and Egg Grilled Cheese Breakfast Sandwich",
#       source_url: "http://iamafoodblog.com/grilled-cheese-recipes-sandwiches-to-eat-and-make-this-holiday-season/",
#       img_url: "http://i.iamafoodblog.com/iamablog/wp-content/uploads/2014/12/DSC_3269.jpg",
#       tag_string: "sandwich",
#       category_id: 3,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Yakiudon",
#       source_url: "http://iamafoodblog.com/yakiudon-recipe/",
#       img_url: "http://x.iamafoodblog.com/iamablog/wp-content/uploads/2014/09/yakiudon-3.jpg",
#       tag_string: "pasta, asian",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Caramelized Pork Tacos",
#       source_url: "http://iamafoodblog.com/caramelized-pork-taco-recipe/",
#       img_url: "http://o.iamafoodblog.com/iamablog/wp-content/uploads/2014/08/caramelized-pork-tacos-4.jpg",
#       tag_string: "tacos, mexican",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "Waffle Donut",
#       source_url: "http://iamafoodblog.com/waffled-donut-recipe/",
#       img_url: "http://i.iamafoodblog.com/iamablog/wp-content/uploads/2014/06/wafflenut-5.jpg",
#       tag_string: "yum",
#       category_id: 4,
#       user_id: 1
#     )
# Recipe.create(
#       title: "Chocolate Caramel Apples",
#       source_url: "http://food52.com/recipes/31658-chocolate-caramel-apples",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47821/full/2014-1021_how_to_make_caramel_apples_500.jpg?1414255633",
#       tag_string: "apple, halloween",
#       category_id: 4,
#       user_id: 1
#     )
# Recipe.create(
#       title: "Pumpkin Gnocchi with Walnut Pesto",
#       source_url: "http://food52.com/recipes/31645-pumpkin-gnocchi-with-walnut-pesto",
#       img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47800/full/eimk_pumpkingnocchi2.jpg?1414160152",
#       tag_string: "pasta",
#       category_id: 5,
#       user_id: 1
#     )

# Recipe.create(
#       title: "",
#       source_url: "",
#       img_url: "",
#       tag_string: "",
#       category_id: ,
#       user_id: 1
#     )

# Recipe.create(
#       title: "",
#       source_url: "",
#       img_url: "",
#       tag_string: "",
#       category_id: ,
#       user_id: 1
#     )

# Recipe.create(
#       title: "",
#       source_url: "",
#       img_url: "",
#       tag_string: "",
#       category_id: ,
#       user_id: 1
#     )

# Recipe.create(
#       title: "",
#       source_url: "",
#       img_url: "",
#       tag_string: "",
#       category_id: ,
#       user_id: 1
#     )

