$(document).ready( function() {
  var form =
      '<label for="title">Title:</label><input type="text" class="recipe-title thick-txt-bx" name="title" placeholder="Title"><br><br><label for="source_url">Recipe Url:</label><input type="text" class="recipe-source-url thick-txt-bx" name="source_url" placeholder="Recipe Url"><br><br><label for="img_url">Image Url:</label><input type="text" class="recipe-img-url thick-txt-bx" name="img_url"><br><br><label for="tags">Tags:</label><input type="text" class="recipe-tags thick-txt-bx" name="tags" placeholder="i.e. healthy, fast, easy"><br><br><select class="categories thick-txt-bx"><option value="" disabled selected>Select Recipe Category</option><option value="Appetizers">Appetizers</option><option value="Beverages">Beverages</option><option value="Breakfast">Breakfast</option><option value="Entrees">Entrees</option><option value="Salads">Salads</option><option value="Sides">Sides</option></select><br><br> <input type="submit" class="submit-recipe thick-txt-bx"  value="Create Pin">';

  var loggedOut = '<p>You are not logged in</p><a href="http://chefboard.herokuapp.com/"><button class="chefboard-btn">chefboard.</button></a>'
  var testNum = 1

function renderExtension() {
  if (testNum == 1) {
    $('#new-recipe').append(form);
  } else {
    $('.logged-out').append(loggedOut);
    $('#new-recipe').toggle();
  }
}

  renderExtension();
});

////////////////////////////////
/////// BUILD NEW RECIPE ///////
////////////////////////////////

$('#new-recipe').on('submit', function(event) {
  event.preventDefault();

  var recipeData = {
    recipe: {
      title: $('.recipe-title').val(),
      source_url: $('.recipe-source-url').val(),
      img_url: $('.recipe-img-url').val(),
    },
    tags: $('.recipe-tags').val(),
    category: $('.categories').val()
  };

  $.ajax({
    type: 'POST',
    // url: 'http://chefboard.herokuapp.com/users/1/recipes',
    url: 'http://localhost:3000/users/1/recipes',
    data: recipeData,
    crossDomain: true,
    success: function( response ) {
      console.log(response);
    },
    error: function( error ) {
      console.log(error);
    }
  })
  .done( function(serverData) {
      console.log("THIS WAS A SUCCESS");
      // close extension after ajax sent...hopefully
      // window.close();
  })
  .fail( function(serverData) {
      console.log("FAILURE");
      // window.close();

  });
});
///////  END NEW RECIPE  ///////


/////    IMAGE SELECT    //////

// document.mouseOver {
//   img.draggable
//   extension.droppable
// }

chrome.tabs.query({active: true, currentWindow:true}, function(array) {
  var currentPage = array[0];
  var currentUrl = currentPage.url;
  var currentTitle = currentPage.title;

  $('.recipe-source-url').val(currentUrl);
  $('.recipe-title').val(currentTitle)
  // console.log(chrome.extension.getExtensionTabs(currentPage.id))
  console.log(currentPage);
  // console.log(chrome.extension.getBackgroundPage());
});


// use nokogiri to scrape everything on the page and then select the images, display them by looking at their src in the extension and wait for selection?