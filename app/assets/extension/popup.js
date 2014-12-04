$(document).ready( function() {
  var userId;
  getUser();
  ////////////////////////      AUTHENTICATE      ////////////////////////
  function getUser() {
    $.ajax({
      url: 'https://chefboard.herokuapp.com/current_user',
      // url: 'http://localhost:3000/current_user',
      type: 'get',
      dataType: '',
      crossDomain: true,
      success: function(userData) {
        userId = userData["uid"];
        authenticateUser(userData);
      },
      error: function(errorCode) {
        $('.logged-out').append(getLoggedOut)
        console.log('FAILED REQUEST');
      }
    })
  }///////////      END AUTHENTICATE      ///////////
  function authenticateUser(user) {
    console.log(user)
    if ( user == "false" ) {
      console.log(user);
      $('.logged-out').append(getLoggedOut)
    } else {
      getPage();
    }
  }
  //////////////////////////     EXTRACT TITLE/URL FROM PAGE    //////////////////////////
  function getPage() {
    chrome.tabs.query({active: true, currentWindow:true}, function(array) {
      currentPage = array[0];
      scrapeImages(currentPage);
    });
  }
  //////////////////////    IMAGE SELECT    ///////////////////////
  function scrapeImages(currentPage) {
    $.ajax({
      url: currentPage.url,
      type: 'get',
      dataType: "",
      success: function(data) {
        var title = '<br><h5>Select Recipe Image:</h5><br>'
        $pageData = $('<form>' + data + '</form>') //has to be in the form for some reason
        $('.scraped-images').prepend(title);
        //find images in the document
        $.each($pageData.find('img[src]'), function(index, item) {
          image_src = $(item).attr('src')
          $('<img src=' + image_src + '>').appendTo('.scraped-images');
        })
        addImageListeners(currentPage);
      },
      error: function(status) {
        console.log("it didn't work");
      }
    })
  }
  function addImageListeners(currentPage) {
    $('img').on('click', function() {
      $('#new-recipe').append(getForm);
      submitRecipeListener();
      $('.scraped-images').toggle();
      var src = $(this).attr('src');
      populateFields(currentPage, src);
    });
  }
  function submitRecipeListener() {
    $('#new-recipe').on('submit', function(event) {
      event.preventDefault();
      var recipeData = getFormData();
      console.log(userId);
      $.ajax({
        type: 'POST',
        url: 'http://chefboard.herokuapp.com/users/' + userId + '/recipes',
        // url: 'http://localhost:3000/users/' + userId + '/recipes',
        data: recipeData,
        crossDomain: true,
        success: function( response ) {
          $('#new-recipe').toggle();
          renderPinnedSuccess();
          setTimeout(function() {window.close()}, 8000);
        },
        error: function( error ) {
          console.log(error);
        }
      });
    });
  } ///////  END NEW RECIPE  ///////
  function populateFields(currentPage, src) {
    $('.recipe-source-url').val(currentPage.url);
    $('.recipe-title').val(currentPage.title)
    $('.recipe-img-url').val(src);
  }
  function renderPinnedSuccess() {
    $('.successful-pin').append(getPinnedPrompt());
  }
  //////////////////////////  TEMPLATES  //////////////////////////
  function getForm() {
    var form =
      '<label for="title">Title:</label><input type="text" class="recipe-title thick-txt-bx" name="title" placeholder="Title"><br><br><label for="source_url">Recipe Url:</label><input type="text" class="recipe-source-url thick-txt-bx" name="source_url" placeholder="Recipe Url"><br><br><label for="img_url">Image Url:</label><input type="text" class="recipe-img-url thick-txt-bx" name="img_url"><br><br><label for="tags">Tags:</label><input type="text" class="recipe-tags thick-txt-bx" name="tags" placeholder="i.e. healthy, fast, easy"><br><br><select class="categories thick-txt-bx"><option value="" disabled selected>Select Recipe Category</option><option value="Appetizers">Appetizers</option><option value="Beverages">Beverages</option><option value="Breakfast">Breakfast</option><option value="Entrees">Entrees</option><option value="Salads">Salads</option><option value="Sides">Sides</option></select><br><br> <input type="submit" class="submit-recipe thick-txt-bx"  value="Create Pin">';
    return form;
  }
  function getLoggedOut() {
    var loggedOut = '<h2 class="chefboard-link">Head over to <a class="chefboard-redirect" href="https://chefboard.herokuapp.com/" target="_blank">chefboard</a> to login!</h2>';
    return loggedOut;
  }
  function getPinnedPrompt() {
    // on submit of form, render this and toggle off form.
    var successfulPin = '<h2 class="chefboard-link success">Pin successful!<br> Check it out on <a class="chefboard-redirect" href="https://chefboard.herokuapp.com/" target="_blank">chefboard.</a></h2>';
    return successfulPin
  }
  ////////////////////// BUILD NEW RECIPE ////////////////////////
  function getFormData() {
    var recipeData = {
      recipe: {
        title: $('.recipe-title').val(),
        source_url: $('.recipe-source-url').val(),
        img_url: $('.recipe-img-url').val(),
      },
      tags: $('.recipe-tags').val(),
      category: $('.categories').val()
    };
    return recipeData;
  }
});/// END DOCUMENT ON READY