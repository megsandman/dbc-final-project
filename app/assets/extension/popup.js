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
      window.close();
  })
  .fail( function(serverData) {
      console.log("FAILURE");
      window.close();

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
  console.log(currentPage);
});
