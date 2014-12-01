CATEGORIES = ["Appetizers", "Beverages", "Breakfast", "Desserts", "Entrees", "Salads", "Sides"]

CATEGORIES.each do |category|
  Category.create(name: category)
end

Recipe.create(
      title: "Chocolate Chip Cookies",
      source_url: "http://www.nytimes.com/2008/07/09/dining/091crex.html?_r=0",
      img_url: "http://graphics8.nytimes.com/images/2013/06/19/dining/19PASTRY1_SPAN/19PASTRY1_SPAN-articleLarge-v2.jpg",
      category_id: 4,
      tag_string: "cookie, chocolate",
      user_id: 1
  )
Recipe.create(
      title: "Cranberry Newton Bars",
      source_url: "http://food52.com/recipes/31923-cranberry-newton-bars",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48297/full/cranberry_newton_bars_1.jpg?1415581465",
      tag_string: "cranberry, bars",
      category_id: 4,
      user_id: 1
  )
Recipe.create(
      title: "Shaved Brussel Sprout Salad",
      source_url: "http://www.sacramentostreet.com/2014/11/on-the-menu-shaved-brussel-sprout-salad/",
      img_url: "http://www.sacramentostreet.com/wp-content/uploads/2014/11/Shaved-Brussel-Sprout-Salad_3.jpg",
      tag_string: "healthy, salad, parmesan, brussel sprout, yum",
      category_id: 6,
      user_id: 1
  )
Recipe.create(
      title: "Cranberry pie with thick pecan crumble",
      source_url: "http://smittenkitchen.com/blog/2014/11/cranberry-pie-with-thick-pecan-crumble/",
      img_url: "http://smittenkitchen.com/wp-content/uploads/cranberry-pie-with-thick-pecan-crumble.jpg",
      tag_string: "pie, yum, cranberry",
      category_id: 4,
      user_id: 1
  )
Recipe.create(
      title: "Mid-Winter Margarita",
      source_url: "http://food52.com/blog/11824-the-mid-winter-margarita",
      img_url: "https://farm8.staticflickr.com/7580/15694874477_c02de54479_b.jpg",
      tag_string: "yum, party, margarita",
      category_id: 2,
      user_id: 1
  )
Recipe.create(
      title: "Crispy Sweet Potato Roast",
      source_url: "http://smittenkitchen.com/blog/2014/11/crispy-sweet-potato-roast/",
      img_url: "http://smittenkitchen.com/wp-content/uploads/crispy-sweet-potato-roast.jpg",
      tag_string: "yum, thanksgiving",
      category_id: 7,
      user_id: 1
  )
  Recipe.create(
      title: "Roasted Grape and Butternut Squash Salad with Kale and Parmesan",
      source_url: "http://food52.com/recipes/32152-roasted-grape-and-butternut-squash-salad-with-kale-and-parmesan",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48732/full/roasted_squash_and_grape_salad05.jpg?1416365978",
      tag_string: "health, squash, parmesan, yum",
      category_id: 6,
      user_id: 1
    )
  Recipe.create(
      title: "Bacon and Leek Tart",
      source_url: "http://food52.com/recipes/32092-bacon-and-leek-tart",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48636/full/15815130945_58b2721784_b-1.jpg?1416264522",
      tag_string: "bacon, tart, yum",
      category_id: 5,
      user_id: 1
    )
  Recipe.create(
      title: "Pumpkin Cheescake Squares",
      source_url: "http://www.sacramentostreet.com/2014/11/on-the-menu-pumpkin-cheesecake-squares-with-toasted-marshmallow-frosting/",
      img_url: "http://www.sacramentostreet.com/wp-content/uploads/2014/11/Pumpkin_Cheesecake_3.jpg",
      tag_string: "bars, pumpkin",
      category_id: 4,
      user_id: 1
    )

  Recipe.create(
      title: "Homemade Cheez-Its",
      source_url: "http://food52.com/recipes/31899-homemade-cheez-its",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48245/full/beauty1.jpg?1415373989",
      tag_string: "snacks, cheese",
      category_id: 1,
      user_id: 1
    )
  Recipe.create(
      title: "Pomegranate Flank Steak",
      source_url: "http://food52.com/recipes/31870-pomegranate-flank-steak",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48193/full/pomegranateflanksteak1.jpg?1415165494",
      tag_string: "steak, pomegranate",
      category_id: 5,
      user_id: 1
    )
  Recipe.create(
      title: "Buttermilk Biscuits",
      source_url: "http://food52.com/recipes/31811-buttermilk-biscuits",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/48228/full/15720424702_9f34c06f4a_k.jpg?1415300915",
      tag_string: "biscuits, yum",
      category_id: 7,
      user_id: 1
    )
  Recipe.create(
      title: "Cookies and Cream Bars",
      source_url: "http://food52.com/recipes/31749-cookies-and-cream-bars",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47954/full/2014-1028_how-to-make-cookies-and-cream-bars-127.jpg?1414688880",
      tag_string: "bars",
      category_id: 4,
      user_id: 1
    )
   Recipe.create(
      title: "Sporting Life",
      source_url: "http://food52.com/recipes/31751-sporting-life",
      img_url: "https://d2k9njawademcf.cloudfront.net/indeximages/47959/full/2014-1028_sporting-life-cocktail-012.jpg?1414694398",
      tag_string: "orange",
      category_id: 2,
      user_id: 1
    )

# User.create(username: "meg", email: "meg@meg.com", password: "password")

