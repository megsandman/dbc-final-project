console.log("page ready man")

$('#new-recipe').on('submit', function(event) {
  event.preventDefault();
  var recipeData = {
    title: $('.recipe-title').val(),
    source_url: $('.recipe-source-url').val(),
    img_url: $('.recipe-img-url').val(),
    body: $('.recipe-body').val(),
    category_id: 1
  };
  // var recipeData = $(this).serialize();
  // debugger;

  $.ajax({
    type: 'POST',
    url: 'http://chefboard.herokuapp.com/users/1/recipes',
    // url: 'http://localhost:3000/users/1/recipes',
    data: recipeData,
    dataType: 'JSONP',
    crossDomain: true,
    success: function( response ) {
      console.log(response);
    },
    error: function( error ) {
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

// window.addEventListener('load', function(event) {

//     statusDisplay = $('#status-display').val();
//     $('#addResource').on('submit', addResource);
//     chrome.runtime.getBackgroundPage(function(eventPage) {
//         eventPage.getPageDetails(onPageDetailsReceived);
//     });
// });