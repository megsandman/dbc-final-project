// alert("OTSIDE THE LISTENER");
// $( document ).ready(function() {
  console.log("page ready man")

  $('#new-recipe').on('submit', function(event) {
    event.preventDefault();

    var recipeData = {
      title: $('.recipe-title').val(),
      source_url: $('.source-url').val(),
      image_url: $('.recipe-img-url').val(),
      body: $('.recipe-body').val(),
    };

    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/users/1/recipes',
      data: recipeData.to_json
    }).done( function(serverData) {
      console.log(serverData);
      console.log("THIS WAS A SUCCESS");
    }).fail( function() {
      console.log("FAILURE");
    });
  });
// });

