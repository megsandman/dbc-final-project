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

  var request = $.ajax({
    type: 'POST',
    url: 'http://chefboard.herokuapp.com/users/1/recipes',
    // url: 'http://localhost:3000/users/1/recipes',
    data: recipeData,
    crossDomain: true,
    success: function( response ) {
      console.log(response);
    },
    error: function( error ) {
      console.log(recipeData);
      console.log(this);
      console.log(error);
    }
  }).done( function(serverData) {
    console.log(serverData);
    console.log("THIS WAS A SUCCESS");

  }).fail( function(serverData) {
    console.log(serverData);
    console.log("FAILURE");

  });
});
///////  END NEW RECIPE  ///////

function checkLogin() {
  var session = jQuery.cookie("user_id");
  if ( session == null ) {
    console.log("No one is logged in!");
  }
}