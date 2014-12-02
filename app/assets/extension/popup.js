$(document).ready( function() {
  ///////////      AUTHENTICATE      ///////////
  function authenticateUser() {
    // get request to current_user route
      // verify logged in from params
    // if logged in:
      // render pictures...then form...
      // assign a variable that will be the userID used in the POST route URL
    //if NOT logged in:
      //display the loggedOut view
    $.ajax({
      url: 'https://chefboard.herokuapp.com/current_user',
      type: 'get',
      dataType: 'JSONP',
      success: function(userData) {

      },
      error: function(errorCode) {
        console.log('FAILED REQUEST');
      }
    })
  }///////////      END AUTHENTICATE      ///////////
  /////////////     EXTRACT TITLE/URL FROM PAGE    /////////////
  chrome.tabs.query({active: true, currentWindow:true}, function(array) {
    var currentPage = array[0];
    var currentUrl = currentPage.url;
    var currentTitle = currentPage.title;
    // renderPinnedSuccess();
    scrapeImages(currentPage);
  });
  //////////////////////    IMAGE SELECT    ///////////////////////
  function scrapeImages(currentPage) {
    $.ajax({
      url: currentPage.url,
      type: 'get',
      dataType: "",
      success: function(data) {
        $pageData = $('<form>' + data + '</form>') //has to be in the form for some reason
        var title = '<br><h5>Select Recipe Image:</h5><br>'
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
  function populateFields(currentPage, src) {
    $('.recipe-source-url').val(currentPage.url);
    $('.recipe-title').val(currentPage.title)
    $('.recipe-img-url').val(src);
  }
  /////////////////  TEMPLATES  /////////////////
  function getForm() {
    var form =
      '<label for="title">Title:</label><input type="text" class="recipe-title thick-txt-bx" name="title" placeholder="Title"><br><br><label for="source_url">Recipe Url:</label><input type="text" class="recipe-source-url thick-txt-bx" name="source_url" placeholder="Recipe Url"><br><br><label for="img_url">Image Url:</label><input type="text" class="recipe-img-url thick-txt-bx" name="img_url"><br><br><label for="tags">Tags:</label><input type="text" class="recipe-tags thick-txt-bx" name="tags" placeholder="i.e. healthy, fast, easy"><br><br><select class="categories thick-txt-bx"><option value="" disabled selected>Select Recipe Category</option><option value="Appetizers">Appetizers</option><option value="Beverages">Beverages</option><option value="Breakfast">Breakfast</option><option value="Entrees">Entrees</option><option value="Salads">Salads</option><option value="Sides">Sides</option></select><br><br> <input type="submit" class="submit-recipe thick-txt-bx"  value="Create Pin">';
    return form;
  }
  function getLoggedOut() {
    var loggedOut = '<p>You are not logged in</p><button class="chefboard-btn">chefboard.</button>'
    addRedirectListener();
    return loggedOut;
  }
  function addRedirectListener() {
    $('.chefboard-btn').on('click', function() {
      // document.location.href="http://chefboard.herokuapp.com/"
      var newTab = "https://chefboard.herokuapp.com/"
      chrome.tabs.create({url: newTab})
    });
  }
  function getPinnedPrompt() {
    // on submit of form, render this and toggle off form.
    var successfulPin = '<p class="success">Pin successful!</p><p class="success-subtitle">Check it out:</p><br><button class="chefboard-btn">chefboard.</button>';
    return successfulPin
  }
  function renderPinnedSuccess() {
    $('.successful-pin').append(getPinnedPrompt());
    addRedirectListener();
  }
  ///////      This will be used for varifying LOGIN
  function renderExtension() {
    var testNum = 1 //test value for checking the toggling between form/loggedout prompt
    if (testNum == 1) {
      $('#new-recipe').append(getForm);
      submitRecipeListener();
    } else {
      $('.logged-out').append(getLoggedOut);
      $('#new-recipe').toggle();
    }
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
  function submitRecipeListener() {
    $('#new-recipe').on('submit', function(event) {
      event.preventDefault();
      var recipeData = getFormData;
      $.ajax({
        type: 'POST',
        url: 'http://chefboard.herokuapp.com/users/1/recipes',
        // url: 'http://localhost:3000/users/1/recipes',
        data: recipeData,
        crossDomain: true,
        success: function( response ) {
          window.close();
          console.log(response);
        },
        error: function( error ) {
          console.log(error);
        }
      });
    });
  } ///////  END NEW RECIPE  ///////
});/// END DOCUMENT ON READY